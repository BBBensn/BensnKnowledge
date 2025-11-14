---
title: ATLAS-Masterproject
project_type: pc
status: planned
ai_involvement: partly_ai
tags:
  - atlas
summary: "Masterproject fürs Project ATLAS. Plan: Homelab bestehend aus NAS und Homeserver."
obsidian_type: project
obsidian_form: Project-Form
related:
  - "[[../Homeserver/Homeserver-Project|Homeserver-Project]]"
date created: 2025-11-14 20:02:59
date modified: 2025-11-14 20:32:38
---

# ATLAS-Masterproject


## Übersicht

ATLAS ist dein gesamtes, modular aufgebautes Infrastruktur‑Ökosystem. Es umfasst Homeserver, NAS, Docker‑Services, Obsidian‑Workflows, Cloudflare‑Tunneling, Backup‑Strategien und Automatisierungen (z. B. AFSS). Ziel ist ein zentralisiertes, sicheres, erweiterbares System, das langfristig wartbar bleibt.

## Ziele & Scope

- Vollständig selbstgehostete, modulare Umgebung
    
- Einheitliche Datenhaltung (NAS + Vault)
    
- Remote‑Zugriff ohne Port‑Forwarding (Cloudflare Tunnel)
    
- Konsistente Dokumentation aller Systeme in Obsidian
    
- Zukunftssichere Architektur mit klaren Unterprojekten
    

**Nicht enthalten:** kurzfristige Experimente, temporäre Tools, private Einzeldokumente.

## Projektstruktur & Meilensteine

- Initiale Architektur: Homeserver + NAS
    
- Netzwerkstruktur & Sicherheit
    
- Docker‑Stack (Services, Bots, SilverBullet)
    
- Obsidian‑Remote‑Workflow (Cloudflare)
    
- AFSS (Automation‑Module)
    
- Langzeit‑Backup & Redundanz
    

## Projektdetails

### Allgemein

ATLAS wird in mehrere Unterprojekte zerlegt, die jeweils eigenständige Project‑Notes besitzen. Dieses Master‑Projekt verweist auf alle Module, definiert globale Abhängigkeiten und enthält alle übergeordneten offenen Fragen.


## Anforderungen & Kontext

- Zentrale Verwaltung aller Markdown‑Daten (Vault, SilverBullet)
    
- Automatisierungen (AFSS, Bots)
    
- Remote‑Nutzung via Cloudflare
    
- Docker als Hauptumgebung für Dienste
    

## Architektur & Module

- **Homeserver:** Docker‑Host, zentrale Dienste
    
- **NAS:** Archivierung, Medien, Backups
    
- **Cloudflare Tunnel:** sicherer Remote‑Zugriff
    
- **SilverBullet:** Web‑Editor für Obsidian‑Vault
    
- **AFSS:** File‑Automation (Sortierung, Metadaten, Pipelines)
    
- **Bots:** Automatisierungen, Schnittstellen zu externen Services
    

## Implementierung & offene Fragen

Die bisherigen offenen Fragen wurden aus der alten ATLAS‑Liste übernommen:

### Offene Fragen (Global)

#### Musik / Medienstruktur

- [ ] Wie Musik Dateien Ordnern und Kategorisieren
	- (Artist/Album/Recording_1|Recording_2|Recording_Live/Songs) oder 
	- (Artist/Album_Recording_1|Album_Recording_2|Album_Recording_Live/Songs)   

- [ ] Eigenen `.flac` Ordner oder alles in die Artist‑Ordner?
    

#### Datenstruktur allgemein

- Einheitliche Namenskonventionen über NAS + Vault?
    
- Wo liegen projektspezifische Configs?
    
- Einheitliche Struktur für Codeservices (Docker‑Compose, Skripte)?
    

#### Sicherheit & Zugriff

- Wie granular werden Rollen später getrennt (Admin/Bots/Public)?
    
- Wie viele Tunnel benötigst du langfristig?
    

#### Backups

- Welche Pipelines sollen automatisiert werden (NAS → Cloud, Vault → Repo, Docker → Snapshots)?
    

## Nächste Schritte

- [ ] NAS‑Projektdatei erstellen
- [ ] Docker‑Projektdatei erstellen
- [ ] Netzwerk/VLAN‑Projektdatei erstellen
- [ ] Obsidian‑Workflow‑Projektdatei erstellen
- [ ] AFSS‑Core‑Projektdatei erstellen
- [ ] Pending Files definieren und verlinken
    

## Links & Referenzen

### Interne Links
   
```dataview
LIST from outgoing([[]])
```

### Externe Links

- 

## Weitere Notizen

Freiraum für globale Überlegungen, Strukturänderungen oder Designentscheidungen, die mehrere Module betreffen.