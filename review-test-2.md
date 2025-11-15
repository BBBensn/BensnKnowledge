---
topic: album
category: album
artist:
  - Kendrick Lamar
album_title: album
album_special_edition_toggle: false
album_special_edition_title: false
instrumental_toggle: false
songwriting_score: 2
production_score: 5
lyrics_score: 6
cohesion_score: 3
relisten_score: 6
creativity_score: 3
release_year: 2025
music_genre:
  - HipHop
tracks: 15
album_length: 04:05
movie_special_edition_toggle: false
book_special_edition_toggle: false
ai_involvement: human
obsidian_type: review
obsidian_form: Review-Form
related:
  -
date created: 2025-11-15 15:14:12
date modified: 2025-11-15 15:17:30
---
# review-test-2


## Übersicht

> Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

## Hauptinhalt

### Basisinformationen

- Kategorie: <% tp.frontmatter.category %>
    
- Thema / Werk: <% tp.frontmatter.topic %>
    

### Bewertung (Album – Sliders)

**Einzelbewertungen (1–10):**

- Songwriting: <% tp.frontmatter.songwriting_score %>/10
    
- Production: <% tp.frontmatter.production_score %>/10
    
- Lyrics: <% tp.frontmatter.lyrics_score %>/10
    
- Cohesion: <% tp.frontmatter.cohesion_score %>/10
    
- Relisten: <% tp.frontmatter.relisten_score %>/10
    
- Creativity: <% tp.frontmatter.creativity_score %>/10
    

**Automatisch berechneter Gesamtscore (Album, Vocal vs. Instrumental):**

```
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