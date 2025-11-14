---
date created: 2025-11-01 08:58:43
date modified: 2025-11-14 01:41:27
---

## 1. Ziel und Kontext

Dieses Dokument beschreibt die geplante Serverarchitektur und die Einrichtung des Cloudflare-Tunnels für den Zugriff auf den selbstgehosteten SilverBullet-Editor.  
Ziel ist ein sicherer, wartungsarmer Zugriff auf den **Atlas Vault**, ohne VPN oder öffentliche Portfreigaben.

---

## 2. Überblick über den Aufbau

**Serverrolle:** Homeserver mit Docker

**Kernkomponenten:**

- SilverBullet (Markdown-Webeditor)
    
- Cloudflare Tunnel (sicherer Webzugriff)
    
- Optional: Git/Syncthing für Sync
    

**Zugriff:** über Domain `https://atlas.bensn.at`

---

## 3. Komponentenbeschreibung

### SilverBullet

- Läuft als Docker-Container
    
- Greift direkt auf den Obsidian-Vault zu (`/mnt/data/obsidian/atlas`)
    
- Bietet Web-GUI für Lesen, Schreiben und Strukturieren
    

### Cloudflare Tunnel

- Baut ausgehend Verbindung zu Cloudflare auf
    
- Kein Port-Forwarding oder VPN nötig
    
- SSL-Zertifikate automatisch
    

**Beispiel docker-compose.yml:**

```yaml
version: "3.9"
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

---

## 4. Domain und DNS

**Domain:** `bensn.me` (World4You)  
**DNS-Verwaltung:** via Cloudflare

**Ablauf:**

1. Domain in Cloudflare importieren.
    
2. Nameserver bei World4You auf Cloudflare umstellen.
    
3. In Cloudflare: Subdomain `atlas.bensn.me` → Tunnel "Atlas" verbinden.
    
4. SSL automatisch aktiv (Universal SSL).
    

---

## 5. Sicherheit

- Zugriff geschützt durch Cloudflare Access (Login per Mail oder Auth-App)
    
- Vault bleibt hinter NAT – keine offenen Ports
    
- Alle Verbindungen TLS-verschlüsselt
    

---

## 6. Ressourcen und Performance

|Dienst|RAM|CPU|Kommentar|
|---|---|---|---|
|SilverBullet|100–300 MB|gering|Browser-Editor, leichtgewichtig|
|Cloudflared|< 50 MB|minimal|Tunnel-Service|

Der Homeserver kann problemlos mehrere Container parallel betreiben.

---

## 7. Weiterführend

> Verknüpfung: [[Atlas – Obsidian Workflow]]

---

## 8. Status

- SilverBullet-Setup geplant
    
- Cloudflare-Tunnel-Konzept steht
    
- Nächster Schritt: Implementierung & Testphase