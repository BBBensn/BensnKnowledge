---
<%*  
const modalForm = app.plugins.plugins.modalforms.api;  
const result = await modalForm.openForm("Review-Form");  
tR += result.asFrontmatterString();  
-%>  
obsidian_type: review  
obsidian_form: Review-Form
related:
-
---
# <% tp.file.title %>


## Übersicht

> Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

## Hauptinhalt

### Basisinformationen

- Kategorie: `= this.artist`
    
- Thema / Werk: `= this.artist`
    

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