---
date created: 2025-11-19 04:26:57
date modified: 2025-11-19 04:39:05
---

# Daily Log – Jahres-Dashboard (Beispiel)

> Hinweis: Passe Pfade (`from "06_Logs/Daily"`), Feldnamen und Filter an deine tatsächliche Struktur an.

---

## 1. Basis: Datengrundlage

```dataview
table file.day as Datum,
       bed_time as "Schlafenszeit",
       got_up_at as "Aufgestanden",
       mood as "Stimmung",
       mood_tags as "Mood-Tags",
       songs_of_the_day as "Song des Tages",
       workshift as "Schicht",
       tags
from "07_Logs/Daily"
where obsidian_type = "daily_log"
sort file.day desc
```

---

## 2. Schlaf – berechnete Schlafdauer (Stunden)

> Annahme: `bed_time` und `got_up_at` sind im Format `HH:mm` und beziehen sich auf eine Nacht (wenn du über Mitternacht schläfst, wird das in der Berechnung berücksichtigt).

```dataviewjs
// Parameter anpassen
const folder = "07_Logs/Daily";

function parseTime(t) {
    if (!t) return null;
    const [h, m] = String(t).split(":").map(Number);
    return h * 60 + m; // Minuten seit 00:00
}

let rows = [];

for (let p of dv.pages(folder).where(p => p.obsidian_type === "daily_log")) {
    const start = parseTime(p.bed_time);
    const end = parseTime(p.got_up_at);

    if (start == null || end == null) continue;

    // Falls über Mitternacht geschlafen wurde
    let durationMinutes = end - start;
    if (durationMinutes <= 0) durationMinutes += 24 * 60;

    const durationHours = durationMinutes / 60;

    rows.push({
        date: p.file.day ?? p.file.name,
        bed: p.bed_time,
        up: p.got_up_at,
        hours: Math.round(durationHours * 10) / 10
    });
}

rows.sort((a, b) => a.date > b.date ? -1 : 1);

dv.table([
    "Datum",
    "Schlafenszeit",
    "Aufgestanden",
    "Schlafdauer (h)"
], rows.map(r => [r.date, r.bed, r.up, r.hours]));
```

### Ø Schlafdauer pro Monat

```dataview
table month(file.day) as Monat,
      round(avg(sleep_hours), 1) as "Ø Schlaf (h)"
from "07_Logs/Daily"
where obsidian_type = "daily_log" and sleep_hours
group by month(file.day)
sort Monat asc
```

> `sleep_hours` kannst du dir z. B. über ein separates DataviewJS-Skript als Feld in den Header zurückschreiben oder vorerst manuell ergänzen.

---

## 3. Stimmung – Verlauf & Ausreißer

### Tabelle: Stimmung und Mood-Tags

```dataview
table file.day as Datum,
      mood as "Stimmung (0–100)",
      mood_tags as "Tags",
      summary as "Kurznotiz"
from "07_Logs/Daily"
where obsidian_type = "daily_log" and mood
sort file.day asc
```

### Höchste / niedrigste Stimmungstage

```dataview
table file.day as Datum,
      mood,
      mood_tags,
      summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and mood
sort mood desc
limit 10
```

```dataview
table file.day as Datum,
      mood,
      mood_tags,
      summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and mood
sort mood asc
limit 10
```

---

## 4. Song des Tages – Übersicht & Häufigkeiten

### Alle Songs des Jahres

```dataview
table file.day as Datum,
      songs_of_the_day
from "07_Logs/Daily"
where obsidian_type = "daily_log" and songs_of_the_day
sort file.day asc
```

### Häufigste Songs des Jahres (Ranking)

```dataviewjs
const pages = dv.pages("07_Logs/Daily").where(p => p.obsidian_type === "daily_log" && p.songs_of_the_day);

let counts = {};

for (let p of pages) {
    for (let song of (p.songs_of_the_day ?? [])) {
        counts[song] = (counts[song] ?? 0) + 1;
    }
}

let data = Object.entries(counts)
    .map(([song, count]) => ({ song, count }))
    .sort((a, b) => b.count - a.count);

// Top 20
const top = data.slice(0, 20);

dv.table(["Song", "Anzahl"], top.map(x => [x.song, x.count]));
```

---

## 5. Personen / Ereignis-Tags (Christopolus, Steffi, Sessel, …)

> Idee: Du nutzt bestimmte Tags in deinen Daily Logs, um Personen / Trigger / Themen zu markieren.

### Tage mit bestimmten Tags

```dataview
table file.day as Datum,
      mood,
      mood_tags,
      tags,
      summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and contains(tags, "Christopolus")
sort file.day desc
```

```dataview
table file.day as Datum,
      mood,
      mood_tags,
      tags,
      summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and contains(tags, "stoned")
sort file.day desc
```

> Für andere Begriffe wie `Platz`, `Sessel`, `Steffi`, `verschlafen`, `Fabi-Jenni` kannst du identische Blöcke anlegen.

---

## 6. Arbeitstage & Schichten

### Alle Arbeitstage mit Schicht

```dataview
table file.day as Datum,
      workshift as "Schicht",
      station as "Sender",
      summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and work_toggle = true
sort file.day desc
```

### Schicht-Statistik

```dataviewjs
const workPages = dv.pages("07_Logs/Daily").where(p => p.obsidian_type === "daily_log" && p.work_toggle === true);

let counts = {};

for (let p of workPages) {
    const ws = p.workshift ?? "unbekannt";
    counts[ws] = (counts[ws] ?? 0) + 1;
}

let data = Object.entries(counts).map(([shift, count]) => ({ shift, count }));

dv.table(["Schicht", "Anzahl Tage"], data.map(d => [d.shift, d.count]));
```

---

## 7. Jahresübersicht – kompakte Kennzahlen

```dataview
table
  round(avg(mood), 1) as "Ø Stimmung",
  length(filter(rows, (r) => r.work_toggle = true)) as "Arbeitstage (Anzahl)",
  length(rows) as "Logged Days"
from "07_Logs/Daily"
where obsidian_type = "daily_log" and file.year = 2025
group by file.year
```

> Wenn du willst, kannst du hier noch Felder wie `sleep_hours`, `oanxiety_level`, `energy` usw. ergänzen.

---

## 8. Export für externe Visualisierung

Wenn du Daten in z. B. Google Sheets, Excel oder ein JS-Chart-Tool exportieren willst, kannst du dir eine flache Tabelle bauen:

```dataview
table
  file.day as Datum,
  bed_time,
  got_up_at,
  mood,
  mood_tags,
  songs_of_the_day,
  work_toggle,
  workshift,
  station,
  tags,
  summary
from "07_Logs/Daily"
where obsidian_type = "daily_log" and file.year = 2025
sort file.day asc
```

Diese Tabelle kannst du dann als CSV exportieren (z. B. über „Copy as CSV“) und in ein externes Visualisierungstool laden.