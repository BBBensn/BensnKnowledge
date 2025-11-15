---
topic: "-"
category: album
artist:
  - Neutral Milk Hotel
album_title: In the Aeroplane Over the Sea
album_special_edition_toggle: false
album_special_edition_title: false
instrumental_toggle: false
songwriting_score: 10
production_score: 10
lyrics_score: 10
cohesion_score: 10
relisten_score: 10
creativity_score: 10
release_year: 1998
music_genre:
  - Rock
  - Indie Rock
tracks: 11
album_length: 05:20
movie_special_edition_toggle: false
book_special_edition_toggle: false
ai_involvement: human
obsidian_type: review
obsidian_form: Review-Form
related:
  -
date created: 2025-11-15 16:15:04
date modified: 2025-11-15 16:20:35
---

# review-test-3-album


## Übersicht

> Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

## Hauptinhalt

### Basisinformationen

#### `= this.artist`
#### `= this.album_title`
#### `= this.release_year`
    

### Bewertung (Album – Sliders)

#### Einzelbewertungen (1–10):

| Kategorie   | Wert                                 |
| ----------- | ------------------------------------ |
| Songwriting | `= this.songwriting_score + " / 10"` |
| Production  | `= this.production_score + " / 10"`  |
| Lyrics      | `= this.lyrics_score + " / 10"`      |
| Cohesion    | `= this.cohesion_score + " / 10"`    |
| Relisten    | `= this.relisten_score + " / 10"`    |
| Creativity  | `= this.creativity_score + " / 10"`  |
 
#### Automatisch berechneter Gesamtscore (Album, Vocal vs. Instrumental):

```dataviewjs
const s = dv.current();

// Kategorie prüfen, damit der Block in anderen Review-Kategorien keinen Unsinn macht
const cat = String(s.category ?? "").toLowerCase();

if (cat === "album") {
    const sw = Number(s.songwriting_score ?? 0);
    const pr = Number(s.production_score ?? 0);
    const ly = Number(s.lyrics_score ?? 0);
    const co = Number(s.cohesion_score ?? 0);
    const rl = Number(s.relisten_score ?? 0);
    const cr = Number(s.creativity_score ?? 0);

    // Instrumental-Toggle – Feldname ggf. anpassen, wenn dein Frontmatter anders heißt
    const instrRaw = String(s.instrumental ?? "").toLowerCase();
    const isInstrumental = ["true", "yes", "1", "y"].includes(instrRaw);

    let score;

    if (isInstrumental) {
        // Gewichtung für Instrumental-Alben
        score = (sw * 0.35) +
                (pr * 0.35) +
                (co * 0.20) +
                (rl * 0.10);
    } else {
        // Gewichtung für Vocal-Alben
        score = (sw * 0.25) +
                (pr * 0.25) +
                (ly * 0.25) +
                (co * 0.15) +
                (rl * 0.10);
    }

    score = Math.round(score * 10) / 10;

    dv.paragraph("**Overall Score (Album):** " + score);
} else {
    dv.paragraph("_Kein Score-Profil für Kategorie: " + (s.category ?? "–") + " definiert._");
}
```

## Nächste Schritte

Was machst du als Nächstes? Anschlussbewertungen, ToDos, Follow-Ups.

## Links & Referenzen

### Interne Links

### Externe Links

## Weitere Notizen

> Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.