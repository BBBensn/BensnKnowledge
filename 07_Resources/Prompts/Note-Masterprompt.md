---
topic: Obsidian Note Masterprompt
target_model: chat_gpt
purpose: Obsidian Note Masterprompt für Chat-GPT
ai_involvement: partly_ai
tags:
  - masterprompt
  - obsidian
  - note
summary: Masterprompt für Chat-GPT in dem die Regeln für die Erstellung von Obsidian Notes festgeschrieben sind.
obsidian_type: prompt
obsidian_form: Prompt-Form
related:
  - "[[../../07_Resources/Prompts/Templates-Masterprompt|Templates-Masterprompt]]"
  - "[[Obsidian-Restart-Prompt]]"
date created: 2025-11-14 04:27:04
date modified: 2025-11-14 04:39:45
---

# Note-Masterprompt


## Übersicht

Dieser Prompt definiert klare Regeln für die Erstellung oder Erweiterung von Obsidian-kompatiblen Notizen. Er legt Struktur, Format, Sprache und Vorgehen fest, um sicherzustellen, dass jede erzeugte Notiz einheitlich, funktional und direkt nutzbar ist.

## Prompt-Ziel

Erstellung oder Überarbeitung einer Markdown-Notiz anhand eines bestehenden Templates. Der Output muss vollständig, strukturiert, konsistent und unmittelbar in Obsidian einsetzbar sein.

## Zielmodell

GPT‑5.1 — optimiert für strukturierte Notizen, Markdown-Generierung und Template‑Verarbeitung.

## Prompt-Inhalt

```
ZIEL:
Erstelle oder erweitere eine Obsidian-kompatible Markdown-Notiz auf Basis eines bestehenden Templates (Anhang)

VERHALTENSRICHTLINIEN:
- Verwende keine dekorativen Emojis; nur funktionale Zeichen (⚠️, ✅) falls wirklich notwendig.
- Behalte die Struktur der Überschriften exakt bei.
- Wenn eine spezifischere Unterteilung sinnvoll ist, füge Subheadlines unterhalb der bestehenden Überschrift hinzu.
- Verwende Markdown-Syntax konsequent:
  - #, ##, ### für Überschriften
  - Tabellen, Codeblöcke, Listen bei Bedarf
  - Interne Obsidian-Links [[Titel]]
  - Trennlinien (---) nur für Header und Unterteilung von Kategorien; werden im finalen Dokument entfernt.
- Sprache: professionell, sachlich, analytisch.
- Ziel: vollständig formatierte, archivfähige Obsidian-Notiz. Ausgabe erfolgt in einem ChatGPT-Canvas.
```

## Kontext & Hinweise

Der Prompt wird in einem Workflow verwendet, in dem Templates die Grundlage für alle Notizen bilden. Er sorgt dafür, dass Änderungen reproduzierbar bleiben, unabhängig vom Notiztyp (Research, Coding, Cheatsheet, Prompt, Journal usw.).

Hinweise:

- Keine Template-Strukturen verändern.
    
- Keine zusätzlichen Formatblöcke oder dekorativen Elemente.
    
- Subheadlines nur dann ergänzen, wenn sie logisch notwendig sind.
    
- Inhalt stets funktional und präzise halten.
    

## Nächste Schritte

- Erweiterung um weitere Template-Varianten.
    
- Ergänzung eines optionalen Debug-Modus zur Prüfung auf Strukturfehler.
    
- Test unterschiedlicher Notiztypen zur Validierung der Einheitlichkeit.
    

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- 

## Weitere Notizen

Offene Überlegungen zur Automatisierung der Template-Auswahl, mögliche Integration in Hotkeys oder Workflows innerhalb des Vaults.