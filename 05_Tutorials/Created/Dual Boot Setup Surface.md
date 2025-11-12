---
title: "Dual Boot Setup – Windows 11 + Linux Mint auf Surface Laptop 3"
date: 2025-11-02
tags: [tutorial, how-to, ai, chat-gpt]
aliases: []
related:
  - [[KnowledgeVault]]
---

# Dual Boot Setup – Windows 11 + Linux Mint auf Surface Laptop 3



## Ziel und Kontext

Dieses Tutorial beschreibt die vollständige Neuinstallation von **Windows 11 Home** und die anschließende Einrichtung eines **Dual-Boot-Systems mit Linux Mint** auf einem **Surface Laptop 3 (Intel i5, 8 GB RAM, 237 GB SSD)**.  
Ziel ist eine klare Partitionierung mit einer **gemeinsamen Datenpartition**, sodass beide Systeme getrennt laufen, aber auf dieselben Dateien zugreifen können.  
Das Vorgehen ist optimiert für Stabilität, Übersicht und spätere Wartbarkeit (z. B. Neuinstallation von Linux ohne Datenverlust).

---

## Voraussetzungen

- Surface Laptop 3 mit mindestens 237 GB SSD  
- Zwei USB-Sticks (≥ 8 GB, keine Fake-Sticks)  
- Stabile Internetverbindung  
- Backup aller persönlichen Daten  
- Windows 11 ISO von Microsoft  
- Linux Mint ISO (Cinnamon-Edition empfohlen)  
- Tool **Rufus** oder **Balena Etcher** zum Erstellen der Boot-Sticks  

---

## Schritte

### Schritt 1 – Windows 11 sauber installieren

1. **Offizielles ISO laden:**  
   [https://www.microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11)
2. Mit **Rufus** einen Boot-Stick erstellen.  
   - Schema: GPT  
   - Zielsystem: UEFI  
   - Dateisystem: NTFS  
3. Surface starten → mit gedrückter **Volume-Down-Taste** vom Stick booten.  
4. Im Setup:  
   - Alle vorhandenen Partitionen löschen (außer Wiederherstellung, wenn gewünscht).  
   - Neue Partition erstellen → Windows automatisch anlegen lassen.  
5. Installation abschließen, Online-Aktivierung erfolgt automatisch über OEM-Key im BIOS.  
6. Nach Setup:  
   - Windows Update ausführen.  
   - Surface-Treiber prüfen: [https://support.microsoft.com/surface/downloads](https://support.microsoft.com/surface/downloads)  
   - **Wiederherstellungspunkt** erstellen.  

**Warum nicht „Zurücksetzen“?**  
Ein „Reset“ behält interne OEM-Strukturen, teils alte Treiber und Wiederherstellungs-Partitionen.  
Eine Neuinstallation via ISO ist **sauberer**, verhindert Treiberreste und Partitionierungsfehler bei Dual-Boot.

---

### Schritt 2 – Partitionierung vorbereiten

1. Öffne in Windows die **Datenträgerverwaltung** (`diskmgmt.msc`).  
2. Wähle Laufwerk C: → Rechtsklick → „Volume verkleinern“.  
3. Erzeuge folgende Aufteilung (237 GB Gesamtplatz):

| Partition | Größe | Typ | Zweck |
|------------|--------|------|------|
| **Windows (C:)** | ca. **120 GB** | NTFS | System & Programme |
| **Linux Mint** | ca. **60 GB** | unzugeordnet (wird bei Installation formatiert) | OS + Programme |
| **Shared Data** | ca. **50–55 GB** | NTFS oder exFAT | Gemeinsame Dateien |

4. Die Linux-Partition bleibt **unzugeordnet**, der Installer übernimmt das Formatieren.  
5. Die Shared-Partition kann in Windows vorformatiert werden (NTFS empfohlen).  

---

### Schritt 3 – Linux Mint installieren

1. Linux Mint ISO laden: [https://linuxmint.com/download.php](https://linuxmint.com/download.php)  
2. Mit Rufus oder Etcher bootfähigen Stick erstellen.  
3. Surface starten → **Volume-Down gedrückt halten** → vom Stick booten.  
4. Im Installer „Neben Windows installieren“ wählen.  
5. Wenn du manuell partitionierst:
   - Freien Speicher (60 GB) auswählen  
   - Root (`/`) → ext4, 58 GB  
   - Swap (2 GB) → falls gewünscht  
   - Shared-Partition **nicht anfassen**  
6. Nach der Installation erstellt Mint automatisch den **GRUB-Bootloader**, der beim Start zwischen Windows und Linux wählen lässt.  
7. Nach dem ersten Boot:
   - System aktualisieren:  
     ```bash
     sudo apt update && sudo apt upgrade -y
     ```
   - Optional Surface-Kernel installieren (Touch/Stift):  
     [https://github.com/linux-surface/linux-surface](https://github.com/linux-surface/linux-surface)

---

## Hinweise / Troubleshooting

| Problem | Ursache | Lösung |
|----------|----------|--------|
| Windows startet direkt ohne GRUB | UEFI-Bootreihenfolge | Bootmenü mit F2 → GRUB-Eintrag nach oben |
| Linux erkennt WLAN nicht | Surface-spezifischer Kernel fehlt | Linux-Surface-Pakete installieren |
| Windows sieht Shared-Partition nicht | Falsches Dateisystem (ext4) | Partition als NTFS/exFAT formatieren |
| Linux kann nicht schreiben | Windows nicht vollständig heruntergefahren | „Schnellstart“ in Windows deaktivieren |

---

## Weiterführende Ressourcen

- [[Linux-Terminal Grundlagen]]
- [[Windows – Clean Install und Wiederherstellungspunkte]]
- [Linux Surface Kernel Projekt](https://github.com/linux-surface/linux-surface)
- [Linux Mint Handbuch (offiziell)](https://linuxmint-installation-guide.readthedocs.io/)

---

## Referenzen / Links

- Microsoft Software Download Portal  
  https://www.microsoft.com/software-download/
- Linux Mint Documentation  
  https://linuxmint.com/documentation.php
- Rufus  
  https://rufus.ie
- Surface Treiber  
  https://support.microsoft.com/surface/downloads
