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
summary: Detaillierter Ablauf
obsidian_type: project
obsidian_form: Project-Form
related:
  - 
date created: 2025-11-21 03:26:18
date modified: 2025-11-21 03:29:20
---

# Zielablauf (End-to-End)

1. **Intake (Telegram/Bot)**
    
	- Du sendest einen Link: `https://foo.com/video/xyz` (+ optional /tag, /prio).
    
	- Bot klassifiziert: _Provider erkennen_, _(Vor-)Titel generieren_, _Duplikate prüfen (vorab)_.
    
	- Ergebnis → **Queue**: Job `{url, provider, guessed_title, tags, priority}`.
    

2. **Download (Worker)**
    
	- Passender **Grabber-Worker** zieht den Job.
    
	- Lädt (S.G, yt-dlp, XN…), schreibt **temp file**, extrahiert **Metadaten** (ffprobe/mediainfo).
    
	- Validiert + normalisiert **Titel** → **Zielpfad** auflösen (Artist/Album/Single).
    

3. **Sort & Archive**
    
	- **Duplikat-Check** (Hash + Dauer + Fuzzy-Titel) gegen DB und lokalen/externen Filetree.
    
	- Nicht vorhanden → **verschieben** in Zielstruktur, **Katalog** updaten (DB).
    
	- **Mirroring** (rsync/robocopy) auf **externe HDDs** und später **NAS** (wenn online).
    

4. **Filetree/Diffchecker**
    
	- Regelmäßig Index jeder Root (PC/HDD1/HDD2/HDD3/NAS) erstellen.
    
	- **Diff** zeigen (fehlend, abweichende Größe/Hash) + **Auto-Fix** (optional).