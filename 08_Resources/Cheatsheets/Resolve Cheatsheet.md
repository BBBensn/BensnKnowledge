---
topic: Davinci Resolve Cheatsheet
environment: program
program:
  - Resolve
ai_involvement: human
tags:
  - shortcuts
  - video-editing
summary: Die wichtigsten Shortcuts für  meinen Highlight-Cutting Workflow in Resolve.
obsidian_type: cheatsheet
obsidian_form: Cheatsheet-Form
related:
  -
date created: 2025-11-17 23:51:20
date modified: 2025-11-18 22:52:40
---

# Resolve Cheatsheet


## Übersicht

Dieses Cheatsheet dokumentiert die wichtigsten Resolve‑Shortcuts und den optimierten Workflow für das schnelle Schneiden von langen Streams, das Kategorisieren über Spuren sowie das Erstellen eines finalen Highlight‑Cuts.

## Cheatsheet-Inhalt

### Kontext & Geltungsbereich

Gedacht für: DaVinci Resolve (Edit Page), Projekte mit langen Screenrecordings oder Livestreams, bei denen viele kurze Highlight‑Clips entstehen. Fokus auf: effiziente Navigation, schnelles Schneiden, Kategorisieren über Spuren und das spätere Zusammenführen der Kategorien. Nicht abgedeckt: Color‑Grading, Fairlight‑Mixing, Multicam‑Editing.

### Kernbefehle / Grundbausteine

Wichtigste Shortcuts für Navigation, Schneiden und Clipverwaltung.

**Navigation & Playback**

- **J / K / L** – Rückwärts / Stopp / Vorwärts (mehrfach drücken erhöht die Geschwindigkeit)
    
- **Pfeil ↑ / ↓** – Zur vorherigen/nächsten Schnittkante
    
- **Shift + Pfeil ← / →** – 5 Frames zurück/vor
    
- **Ctrl + Pfeil ← / →** – 1 Sekunde zurück/vor
    
- **Shift + Z** – Timeline ein-/auszoomen
    

**Schneiden & Trimmen**

- **Ctrl + B** – Schnitt an Playhead
    
- **Ctrl + Shift + B** – Schnitt an Playhead auf _allen_ aktivierten Spuren
    
- **Shift + Backspace** – Ripple‑Delete
    
- **Backspace** – Löschen ohne Ripple
    
- **Q / W** – Ripple‑Trim am Start/Ende
    
- **B** – Blade‑Tool
    
- **A** – Selection‑Tool
    

**Clip‑Bewegung & Organisation**

- **Alt + Pfeil ↑ / ↓** – Clip eine Spur nach oben/unten verschieben
    
- **Alt + Drag** – Clip duplizieren
    
- **F** – Match Frame (zeigt ursprünglichen Clip im Viewer)
    

**Spuren & Auswahl**

- **Alt + 1–9** – Spuren im Source Track Selector ein/auswählen
    
- **Linked Selection (N)** – Verknüpfte Auswahl aktivieren/deaktivieren
    
- **Auto‑Select (Pfeile links im Spurheader)** – Bestimmt, ob Ripple Delete mehrere Spuren betrifft
    

### Beispiele & Patterns

**1. Kategorisieren während des Schnitts**

- Playhead bewegen → **Ctrl + B**
    
- Markierten Ausschnitt → **Alt + Pfeil ↑/↓** auf die gewünschte Kategorie‑Spur verschieben
    

**2. Highlight‑Timeline flach machen**

- Mastertimeline duplizieren
    
- Unerwünschte Kategorien löschen
    
- **Ctrl + A**
    
- Compound Clip erstellen → Rechtsklick → „In Timeline öffnen“ → Alle Clips liegen nun auf Spur 1
    

**3. Ripple Delete über mehrere Spuren**

- Alle Pfeile (Auto‑Select) aktivieren
    
- Bereich markieren
    
- **Shift + Backspace**
    

### Häufige Fehler / Stolperfallen

- „Ripple Delete funktioniert nicht“ → Auto‑Select‑Pfeile sind nicht aktiv.
    
- Mono‑Audio klingt nur links in einer Stereo‑Timeline → Clip‑Attribute prüfen oder Spurtyp auf Mono setzen.
    
- Blade‑Tool zu oft genutzt → **Ctrl + B** ist schneller und vermeidet unnötige Tool‑Wechsel.
    
- Clip springt horizontal beim Spurenwechsel → **Shift** beim Ziehen oder **Alt + Pfeil** verwenden.
    

## Nächste Schritte

## Links & Referenzen

### Interne Links

```
LIST from outgoing([[]])
```

### Externe Links

## Weitere Notizen

- Optional: Farben pro Kategorie definieren (über Clip‑Farben im Kontextmenü oder eigene Hotkeys).