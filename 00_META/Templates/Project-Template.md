---
<%*
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm("Project-Form");
tR += result.asFrontmatterString();
-%>
obsidian_type: project
obsidian_form: Project-Form
---
# <% tp.file.title %>


## Übersicht

Kurze Beschreibung des Projekts: Worum geht es, was ist das Ziel, in welchem groben Rahmen bewegt sich das Ganze?

## Ziele & Scope

- Hauptziel(e) des Projekts
    
- Abgrenzung: Was gehört explizit dazu, was nicht?
    
- Erfolgskriterien / Done-Definition
    

## Projektstruktur & Meilensteine

Hier kannst du das Projekt grob in Phasen, Module oder Meilensteine aufteilen.

- Phase / Meilenstein 1
    
- Phase / Meilenstein 2
    
- Phase / Meilenstein 3
    

## Projektdetails

### Allgemein

Freitext für projekttyp-unabhängige Details (Kontext, Rahmenbedingungen, beteiligte Personen, Abhängigkeiten, Risiken etc.).

---

### Coding-Projekte

Nutze diesen Abschnitt, wenn `project_type = coding` ist.

- Techstack (siehe Frontmatter `techstack`)
    
- Repository: `repo`
    
- Architektur / Module
    
- offene technische Fragen
    

```md
- Modul A
- Modul B
- Modul C
```

---

### Musik-Projekte

Nutze diesen Abschnitt, wenn `project_type = music` ist.

- Genre / Stimmung
    
- Tempo / BPM
    
- Instrumente / Layer (siehe `instruments`)
    
- Referenzsongs (`reference_songs`)
    
- Songstruktur (Intro, Verse, Hook, Bridge, Outro)
    

```md
- Struktur-Idee:
  - Intro
  - Strophe
  - Refrain
  - Bridge
  - Outro
```

---

### Fashion-Projekte

Nutze diesen Abschnitt, wenn `project_type = fashion` ist.

- Piece (siehe `piece`)
    
- Materialien (`materials`)
    
- Techniken (`techniques`)
    
- Farbpalette (`color_palette`)
    
- Schnitte / Skizzen / Besonderheiten
    

---

### Creative / Foto / Video / Animation / Illustration

Nutze diesen Abschnitt, wenn `project_type = creative` ist.

- Medium (`medium` / `mixed_media`)
    
- Bild-/Videoformate (Aspect Ratio, Orientierung)
    
- FPS / Outputformate
    
- Look & Feel / Stilreferenzen
    

```md
- Medium:
- Aspect Ratio:
- FPS:
- Output:
```

## Nächste Schritte

Konkrete, umsetzbare ToDos, die sich direkt aus dem aktuellen Projektstatus ergeben.

-  Schritt 1
    
-  Schritt 2
    
-  Schritt 3
    

## Links & Referenzen

### Interne Links

### Externe Links

## Weitere Notizen

Alles, was sonst noch wichtig ist: Ideen, Risiken, Learnings, offene Fragen, spätere Erweiterungen.