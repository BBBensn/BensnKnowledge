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

- Kategorie: <% tp.frontmatter.category %>
    
- Titel / Werk / Produkt: <% tp.frontmatter.item %>
    
- Jahr / Release: <% tp.frontmatter.year %>
    
- Hersteller / Künstler / Autor: <% tp.frontmatter.creator %>
    

### Bewertung

**Einzelbewertungen (1–10):**

- Kategorie 1: <% tp.frontmatter.rating_1 %>/10
    
- Kategorie 2: <% tp.frontmatter.rating_2 %>/10
    
- Kategorie 3: <% tp.frontmatter.rating_3 %>/10
    
- Kategorie 4 (optional): <% tp.frontmatter.rating_4 %>/10
    

**Automatisch berechneter Gesamtscore:**

```
TABLE (rating_1 + rating_2 + rating_3 + rating_4) / 4 AS "Gesamtscore"
FROM ""
WHERE file.path = this.file.path
```

### Details

- Stärken:
    
- Schwächen:
    
- Bemerkenswerte Punkte:
    

## Nächste Schritte

Was machst du als Nächstes? Anschlussbewertungen, ToDos, Follow-Ups.

## Links & Referenzen

### Interne Links

### Externe Links

## Weitere Notizen

> Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.