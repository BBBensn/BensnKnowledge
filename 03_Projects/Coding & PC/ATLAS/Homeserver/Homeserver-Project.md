---
title: Homeserver Project
project_type: pc
status: planned
ai_involvement: partly_ai
tags:
  - atlas
  - server
  - docker
summary: Main Note für die Serverseite des Project ATLAS.
obsidian_type: project
obsidian_form: Project-Form
related:
  - "[[../ATLAS Project/ATLAS-Masterproject|ATLAS-Masterproject]]"
date created: 2025-11-14 20:15:08
date modified: 2025-11-14 20:33:20
---

# Homeserver-Project


## Übersicht

Dieses Unterprojekt beschreibt die technische Umsetzung des Homeservers als Docker-Host, die Einrichtung des SilverBullet-Editors und die Integration des Cloudflare-Tunnels für sicheren Remote-Zugriff.

## Ziele & Scope

- SilverBullet als Remote-Editor für den ATLAS-Vault bereitstellen
    
- Zugriff ausschließlich über Cloudflare Tunnel
    
- Keine offenen Ports, kein VPN erforderlich
    
- Stabile, reproduzierbare Docker-Umgebung
    

**Nicht enthalten:** NAS-Konfiguration, Backup-Systeme, allgemeine Netzwerkarchitektur.

## Projektstruktur & Meilensteine

- Server vorbereiten (OS, Docker, User)
    
- SilverBullet-Container implementieren
    
- Cloudflare Tunnel konfigurieren
    
- Domain/SSL einrichten
    
- Sicherheitshärtung & Testphase
    

## Projektdetails

### Allgemein

Der Zugriff auf den ATLAS-Vault soll unabhängig vom lokalen Netzwerk funktionieren. Cloudflare übernimmt Authentifizierung, TLS und Routing. SilverBullet dient als browserbasierter Editor.


## Anforderungen & Kontext

- Selbstgehosteter Webeditor (SilverBullet)
    
- Zero-trust Remote-Zugriff via Cloudflare
    
- Vault liegt lokal auf dem Server
    
- Minimale Angriffsfläche, keine Portfreigaben
    

## Architektur & Module

- **SilverBullet-Container**: bringt Web-GUI für Markdown
    
- **Cloudflared-Container**: baut Tunnel zu Cloudflare
    
- **Domain (Cloudflare DNS)**: steuert Routing über Subdomain
    
- **ATLAS-Vault**: liegt direkt im gemounteten Volume
    

## Implementierung & offene Fragen

- Welche zusätzlichen Dienste sollen später über denselben Tunnel erreichbar sein?
    
- Separate Tunnels pro Service oder Multi-route?
    
- Wie werden Zugriffsrollen in Cloudflare Access definiert?
    
- Integration in zukünftiges Monitoring?
    

### Beispiel docker-compose.yml

```
services:
  silverbullet:
    image: zefhemel/silverbullet
    container_name: silverbullet
    volumes:
      - /mnt/data/obsidian/atlas:/space
    expose:
      - "3000"
    restart: unless-stopped

  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    command: tunnel run atlas
    environment:
      - TUNNEL_TOKEN=<DEIN_TUNNEL_TOKEN>
    restart: unless-stopped
```


## Nächste Schritte

- [ ] Cloudflare Access konfigurieren
- [ ] SilverBullet testen (Mobil + Desktop)
- [ ] Logs und Monitoring anbinden
- [ ] Optional: Reverse Proxy hinzufügen (Caddy oder Traefik)
- [ ] Dokumentation finalisieren
    

## Links & Referenzen

### Interne Links   

```dataview
LIST from outgoing([[]])
```

### Externe Links

## Weitere Notizen

Freiraum für technische Details oder spätere Erweiterungen, z. B. zusätzliche Webdienste im selben Tunnel.