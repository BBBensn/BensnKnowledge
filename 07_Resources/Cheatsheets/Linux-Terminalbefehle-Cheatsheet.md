---
topic: Shortcuts und Befehle für Linux
environment: linux
program:
  - Linux
ai_involvement: ai_written
tags:
  - linux
  - shortcuts
  - hotkeys
  - commands
  - terminal
summary: Ein allgemeines Cheatsheet für die wichtigsten Befehle für Linux.
obsidian_type: cheatsheet
obsidian_form: Cheatsheet-Form
related:
  - "[[Linux-Shortcuts-Cheatsheet]]"
date created: 2025-11-14 03:14:43
date modified: 2025-11-14 03:38:50
---

# Linux-Terminalbefehle-Cheatsheet

## Übersicht

Dieses Cheatsheet bietet einen umfassenden Überblick über essenzielle **Linux-Terminalbefehle** für den täglichen Gebrauch auf **Linux Mint / Ubuntu**. Der Fokus liegt auf einer sicheren, effizienten und nachvollziehbaren Nutzung des Terminals. Es ist als Grundlage für den Einstieg und als Referenz für fortgeschrittene Workflows gedacht.

## Cheatsheet-Inhalt

### Kontext & Geltungsbereich

Dieses Cheatsheet gilt für Systeme mit **bash/zsh-Shell** und Ubuntu-/Mint-basierten Distributionen. Es deckt die grundlegenden und praxisrelevanten Terminalbefehle ab, jedoch keine fortgeschrittene Serveradministration oder Netzwerkdienste auf Expertenniveau.

### Kernbefehle / Grundbausteine

- **Systemaktualisierung**  
    `sudo apt update && sudo apt upgrade -y` → Aktualisiert Paketquellen und installiert verfügbare Updates.
    
- **Dateiansicht & Navigation**  
    `pwd`, `ls -la`, `cd`, `tree -L 2` → Zeigt Pfad, listet Dateien auf, wechselt Verzeichnisse, oder zeigt Baumstruktur.
    
- **Dateien kopieren & verschieben**  
    `cp -av SRC DEST`, `mv ALT NEU`, `rsync -avh --progress SRC/ DEST/` → Behalten Rechte und Fortschritt bei, zuverlässig für große Mengen.
    
- **Dateien löschen (sicher)**  
    `trash FILE` (statt `rm`)  
    → Sendet in den Papierkorb, um versehentliches Löschen zu vermeiden.
    
- **Dateirechte & Eigentümer**  
    `chmod u+rw,g+r file`, `chown user:group file` → Zugriffsrechte und Besitz anpassen.
    
- **Systeminformationen**  
    `uname -a`, `lsb_release -a`, `df -hT`, `lsblk -f` → Kernel, Distro, Speicher- und Laufwerksübersicht.
    
- **Prozesse & Auslastung**  
    `htop`, `btop`, `ps aux`, `kill PID` → Systemauslastung und Prozesse überwachen oder beenden.
    
- **Netzwerktools**  
    `ip a`, `ss -tulpn`, `ping`, `dig`, `curl -I` → Interfaces, offene Ports, Erreichbarkeit und DNS prüfen.
    
- **Archivierung**  
    `tar -czf backup.tar.gz folder/`, `unzip file.zip` → Komprimieren und Entpacken.
    
- **Suchbefehle**  
    `rg "wort"`, `fd ".ext"`, `find . -name "*.log"` → Schnelle, rekursive Suche nach Dateien und Inhalten.
    
- **Paketverwaltung (APT)**  
    `sudo apt install <paket>`, `apt remove <paket>`, `apt show <paket>` → Installation, Entfernung und Infos zu Paketen.
    

### Beispiele & Patterns

- **Synchronisation mit Rsync:**  
    `rsync -avh --delete --progress /Quelle/ /Ziel/`  
    → Spiegelt Quellordner auf Ziel, löscht veraltete Dateien.
    
- **Log-Analyse:**  
    `journalctl -p 3 -xb`  
    → Zeigt nur aktuelle Fehlermeldungen an.
    
- **Platzfresser finden:**  
    `ncdu /`  
    → Interaktives Tool zur Speicheranalyse.
    
- **Netzwerkanalyse:**  
    `ss -tulpn | grep 8080`  
    → Listet Prozesse auf, die Port 8080 belegen.
    
- **NTFS-Mount via /etc/fstab:**  
    `UUID=DEAD-BEEF /mnt/shared ntfs3 uid=1000,gid=1000,umask=022,noatime 0 0` → Gemeinsame Datenpartition (Dual-Boot Windows/Linux).
    

### Häufige Fehler / Stolperfallen

- **"Permission denied"** → Prüfe Rechte mit `ls -l`, ggf. `sudo chown -R $USER:$USER <pfad>`.
    
- **"Device busy" beim Umount** → Ursache mit `lsof +f -- /mnt/xyz` finden.
    
- **APT-Locks** → `sudo rm /var/lib/apt/lists/lock` nur im Notfall.
    
- **NTFS „dirty bit“** → Erst `sudo ntfsfix`, dann unter Windows `chkdsk /f`.
    

## Nächste Schritte

- Integration mit [[Linux-Shortcuts-Cheatsheet]] vorbereiten.
    
- Ergänzung um Bash-Scripting-Grundlagen.
    
- Prüfen, ob Aliases automatisch aus .bashrc importiert werden sollen.
    

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- https://tldr.sh
    
- https://linuxcommand.org/lc3_learning_the_shell.php
    

## Weitere Notizen

Erweiterbar um separate Sektionen für:

- Prozessmanagement & Systemd-Dienste.
    
- Backup & Snapshot-Strategien (Timeshift, Borg).
    
- Netzwerk-Debugging & Monitoring (iftop, nmap, iperf3).