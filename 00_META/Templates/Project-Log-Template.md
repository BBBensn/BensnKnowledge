---
<%*  
const modalForm = app.plugins.plugins.modalforms.api;  
const result = await modalForm.openForm("Project-Log-Form");  
tR += result.asFrontmatterString();  
-%>  
obsidian_type: project_log  
obsidian_form: Project-Log-Form
related:
-
---
# <% tp.file.title %>


## Übersicht

Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

## Fortschritt

Dokumentiere den aktuellen Fortschritt des Projekts: Was wurde erledigt? Was hat sich verändert?

### Erledigtes

- Punkt 1
    
- Punkt 2
    
- Punkt 3
    

### Blocker

Welche Hindernisse, Probleme oder Unsicherheiten gibt es aktuell?

- Blocker 1
    
- Blocker 2
    

### Status

Aktueller Zustand des Projekts (siehe Frontmatter `status`).

## Nächste Schritte

Was sind die nächsten ToDos, Entscheidungen oder Arbeitsschritte?

- Schritt 1
    
- Schritt 2
    

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- 

## Weitere Notizen

Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.