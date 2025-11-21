---
title: AFSS - Automatic File Sorting System
project_type: coding
techstack:
  - python
repo: "-"
status: draft
ai_involvement: human
tags:
  - atlas
  - server
  - pc
summary: Sammlung vieler einzelner Prozesse, optimiert für den Serverbetrieb
obsidian_type: project
obsidian_form: Project-Form
related:
  - 
date created: 2025-11-21 01:10:15
date modified: 2025-11-21 07:21:04
---

# AFSS-Project


## Übersicht

Project AFSS besteht aus vielen einzelnen Diensten, die gemeinsam in einem großen Projekt gebündelt werden. 
### Geplante Services:

Grabber:
- s.g grabber
- celeb grabber
- yt-dlp grabber (xn usw)

Recorder:
- chat recorder

Converter
- Mp4 normalize
- h264 --> h265

Sonstiges:
- Filehandler (Files werden automatisch gehandelt und von Ort zu Ort verschoben)

### Geplanter Ablauf:

- Eingabe per Chatbot oder GUI, Metadateneingabe direkt möglich, tags setzen evtl. artist (sonst titleabgleich), titel usw.
- Zuordnung welcher Service zuständig ist, Überprüfen ob das File bereits vorhanden ist, wenn nicht: Auftrag wird an jeweiligen Downloader weitergeleitet.
- Download / Data-Gathering von verschiedenen Seiten
	- sg: Vollautomatischer Grabber über doodstream Videos.
	- Imagegrabber für celeb.cx oder ähnliche Seiten
	- standard yt-dlp Downloader für die meisten anderen Seiten
	- Chat-Recorder
- FIle normalize: Convert von allen Files die noch nicht .mp4 sind, danach recode aller mp4 in h265
- nachdem sichergestellt wurde, dass die Recodierung erfolgreich war wird das Original gelöscht
- Files werden am richtigen Zielort abgelegt und katalogisiert.
- Mirroring PC <--> NAS (vorerst 2 HDD's)
- katalogisieren

## Ziele & Scope

- Vollautomatischer Download und Sortierungsprozess neuer Videos
    
- Abgrenzung: Was gehört explizit dazu, was nicht?
    
- Erfolgskriterien / Done-Definition
    

## Projektstruktur & Meilensteine

Hier kannst du das Projekt grob in Phasen, Module oder Meilensteine aufteilen.

- Phase / Meilenstein 1
    
- Phase / Meilenstein 2
    
- Phase / Meilenstein 3
    

## Projektdetails

### Allgemein

Freitext für projekttyp-unabhängige Details (Kontext, Rahmenbedingungen, Beteiligte, Abhängigkeiten, Risiken etc.).

---
---

# Coding-Projekte

Nutze diesen Abschnitt, wenn `project_type = coding` ist.

## Anforderungen & Kontext

- Problemstellung / Use-Case
    
- Zielgruppe / Anwender
    
- Wichtige Rahmenbedingungen
    

## Architektur & Module

- Grobe Architektur (Client/Server, Services, Datenfluss)
    
- Wichtige Module / Komponenten
    
- Schnittstellen zu anderen Systemen
    

## Implementierung & offene Fragen

- Technische Entscheidungen, die du getroffen hast (z. B. Frameworks, Libraries)
    
- Offene Fragen, Risiken, Dinge, die du noch klären musst
    

---
---

# Musik-Projekte

Nutze diesen Abschnitt, wenn `project_type = music` ist.

## Konzept & Referenzen

- Stimmung / Mood
    
- Genre / Stil
    
- Referenzsongs (`reference_songs`)
    

## Struktur & Arrangement

- Grobe Songstruktur (Intro, Strophe, Refrain, Bridge, Outro)
    
- Variation / Dynamik zwischen den Teilen
    

## Lyrics & Vocals

- Textideen, Fragmente, Themen
    
- Art der Vocals (gesprochen, gesungen, Shouts, Chöre)
    

## Sound Design & Mix

- Wichtige Instrumente / Layer (`instruments`)
    
- Klangästhetik (clean, dreckig, lo-fi, polished)
    
- Besondere Effekte oder Räume
    

---
---

# Fashion-Projekte

Nutze diesen Abschnitt, wenn `project_type = fashion` ist.

## Designkonzept

- Piece-Typ (`piece`)
    
- Grundidee / Statement
    
- Farbpalette (`color_palette`)
    

## Materialien & Verarbeitung

- Stoffe / Materialien (`materials`)
    
- Techniken (`techniques`)
    
- Besondere Details (Nähte, Applikationen, Verschlüsse)
    

## Schnitt & Passform

- Silhouette (weit, slim, cropped, oversized)
    
- Technische Skizzen / Schnittideen (optional per Link/Bild)
    

---
---

# Creative / Foto / Video / Animation / Illustration

Nutze diesen Abschnitt, wenn `project_type = creative` ist.

## Konzept & Story

- zentrale Idee / Narrativ
    
- Ziel / Wirkung (Mood, Message)
    

## Visueller Stil

- Referenzen, Moodboards
    
- Stilentscheidungen (Farben, Kontraste, Körnung, Licht)
    

## Technische Spezifikationen

- Medium (`medium` / `mixed_media`)
    
- Bild-/Videoformate (Aspect Ratio, Orientierung)
    
- FPS / Auflösung / Ausgabeformate
    

## Ausgabe & Distribution

- geplante Plattformen (z. B. Social, Print, Portfolio)
    
- besondere Exportanforderungen
    

## Nächste Schritte

Konkrete, umsetzbare ToDos, die sich direkt aus dem aktuellen Projektstatus ergeben.

- [ ] Schritt 1
- [ ] Schritt 2

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- 

## Weitere Notizen

Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.