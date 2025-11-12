# Linux Terminal – Starterkit & Cheatsheet (für Linux Mint / Ubuntu-Basis)

**Ziel:** Kompakte, aber belastbare Referenz für deinen täglichen Terminal-Workflow inkl. „sicheren Defaults“, Erklärungen und Best-Practices – zugeschnitten auf **Linux Mint** (Ubuntu-Basis), aber mit Hinweisen für andere Distros.  
**Stil:** Obsidian-freundliche Markdown-Notiz, klare Hierarchie, keine Deko-Emojis, nur funktionale Symbole (✅, ⚠️, 🔧).

---

## Inhalt

- [[#Schnellstart (TL;DR)|Schnellstart (TL;DR)]]
    
- [[#Grundlagen|Grundlagen]]
    
- [[#Navigation & Dateiensicht|Navigation & Dateiensicht]]
    
- [[#Dateien & Ordner (anlegen, kopieren, verschieben)|Dateien & Ordner]]
    
- [[#Suchen & Finden|Suchen & Finden]]
    
- [[#Rechte, Eigentümer, ACL|Rechte, Eigentümer, ACL]]
    
- [[#Prozesse & Ressourcen|Prozesse & Ressourcen]]
    
- [[#Systemdienste & Logs|Systemdienste & Logs]]
    
- [[#Netzwerk|Netzwerk]]
    
- [[#Datenträger, Dateisysteme & Mounts|Datenträger, Dateisysteme & Mounts]]
    
- [[#Archive & Komprimierung|Archive & Komprimierung]]
    
- [[#Paketverwaltung|Paketverwaltung]]
    
- [[#SSH & Dateiübertragung|SSH & Dateiübertragung]]
    
- [[#Backup & Snapshots|Backup & Snapshots]]
    
- [[#Scripting & Shebang|Scripting & Shebang]]
    
- [[#Shell-Komfort (Alias, Tools, Prompt)|Shell-Komfort (Alias, Tools, Prompt)]]
    
- [[#Sicher Löschen & Recovery-Helfer|Sicher Löschen & Recovery-Helfer]]
    
- [[#Dual-Boot: Gemeinsame Daten mit Windows|Dual-Boot: Gemeinsame Daten mit Windows]]
    
- [[#Cinnamon/Mint per Terminal justieren (optional)|Cinnamon/Mint per Terminal (optional)]]
    
- [[#Troubleshooting & Patterns|Troubleshooting & Patterns]]
    

---

## Schnellstart (TL;DR)

```bash
# 0) Admin:
sudo -v                                # sudo-Token „vorwärmen“

# 1) Update & Essentials:
sudo apt update && sudo apt upgrade -y # System updaten (Mint/Ubuntu)
sudo apt install -y build-essential git curl wget htop btop unzip \
  ripgrep fd-find bat eza fzf zoxide trash-cli ncdu net-tools

# 2) Komfort-Symlinks (Ubuntu-Namen → „Standard“-Namen):
sudo ln -s /usr/bin/fdfind /usr/local/bin/fd 2>/dev/null || true
sudo ln -s /usr/bin/batcat /usr/local/bin/bat 2>/dev/null || true

# 3) Shell-Setup (bash):
echo 'eval "$(zoxide init bash)"' >> ~/.bashrc
echo 'eval "$(fzf --bash)"' >> ~/.bashrc
echo 'alias ll="eza -l --group --icons"' >> ~/.bashrc
echo 'alias la="eza -la --group --icons"' >> ~/.bashrc
echo 'alias grep="rg"' >> ~/.bashrc
echo 'alias cat="bat -pp"' >> ~/.bashrc
echo 'alias dfh="df -hT"' >> ~/.bashrc
echo 'alias duh="du -h --max-depth=1 | sort -h"' >> ~/.bashrc
echo 'alias rm="trash -v"' >> ~/.bashrc
source ~/.bashrc

# 4) Logs & Services quick:
journalctl -p 3 -xb                   # heutige Errors
systemctl --failed                    # fehlgeschlagene Dienste

# 5) Platzfresser finden:
ncdu /                                # interaktiver Platz-Scanner (q zum Beenden)

# 6) Rsync sicher kopieren:
rsync -avh --progress SRC/ DEST/
```

✅ **Prinzip:** „Sicherer Default“ – `rm` → Papierkorb (`trash-cli`), `cat` → `bat`, `ls` → `eza`, `grep` → `ripgrep`.

---

## Grundlagen

**Befehlsaufbau:** `kommando [optionen] [argumente]`  
**Hilfen:** `kommando --help`, `man kommando`, `tldr kommando` (falls `tldr` installiert)  
**Root/Sudo:** `sudo <befehl>` nur wenn nötig; `sudo -v` hält das Ticket frisch.

```bash
whoami        # aktueller User
uname -a      # Kernel/Arch
lsb_release -a  # Distrospezifisch (Mint/Ubuntu)
```

⚠️ **Nie blind `sudo rm -rf /`**. Nutze Papierkorb und prüfe Pfade.

---

## Navigation & Dateiensicht

```bash
pwd               # aktuelles Verzeichnis
cd /pfad/zu/dir   # wechseln
cd                # $HOME
cd -              # zurück
ll                # detaillierte Liste (Alias eza -l)
la                # inkl. versteckte Dateien
tree -L 2         # Baumansicht (sudo apt install tree)
```

**Zoxide (smarter cd):**

```bash
z foo     # springt zum "foo"-Verzeichnis, das du häufig nutzt
zi bar    # interaktives Fuzzy-Jump
```

---

## Dateien & Ordner (anlegen, kopieren, verschieben)

```bash
touch file.txt
mkdir -p a/b/c
cp -av SRC/ DEST/           # -a behält Rechte/Zeitstempel; -v verbose
mv ALT NEU
rsync -avh --progress SRC/ DEST/    # robust, wiederholbar
```

**Sicherer „Löschen“-Ersatz (Papierkorb):**

```bash
trash file.txt
trash-list
trash-restore    # interaktive Wiederherstellung
```

---

## Suchen & Finden

```bash
rg "muster" path/         # superschnell (Ripgrep)
fd ".png" path/           # dateien finden (statt find)
find . -type f -name "*.log"
```

**Beispiele:**

```bash
# In Dateien rekursiv suchen + Zeilennr
rg -n "TODO" src/

# Größte Dateien (top 20):
find . -type f -printf "%s %p\n" | sort -nr | head -20 | numfmt --to=iec
```

---

## Rechte, Eigentümer, ACL

```bash
ls -l                 # Modus/Owner/Gruppe
chmod u+rw,g+r,o- file.txt
chown user:group file.txt
umask                 # Standardmaske anzeigen
```

**ACL (feingranular):**

```bash
setfacl -m u:benni:rwX /shared
getfacl /shared
```

---

## Prozesse & Ressourcen

```bash
ps aux | less
pgrep firefox
pkill -9 name
top         # minimalistisch
htop        # hübscher (sudo apt install htop)
btop        # noch hübscher (sudo apt install btop)
```

**Priorität:**

```bash
nice -n 10 kommando
renice -n 10 -p <PID>
```

---

## Systemdienste & Logs

```bash
systemctl status servicename
sudo systemctl start|stop|restart servicename
sudo systemctl enable|disable servicename
```

**Logs (systemd-journal):**

```bash
journalctl -xe                      # letzte Fehler/Events
journalctl -u servicename           # nur für Dienst
journalctl -p 3 -xb                 # heutige Errors (Priority 3)
```

---

## Netzwerk

```bash
ip a               # IPs/Interfaces
ip r               # Routen
ss -tulpn          # offene Ports/Sockets
ping 1.1.1.1
traceroute heise.de       # sudo apt install traceroute
dig example.com +short    # sudo apt install dnsutils
curl -I https://example.com
```

**NetworkManager CLI:**

```bash
nmcli dev status
nmcli con show
```

---

## Datenträger, Dateisysteme & Mounts

```bash
lsblk -f          # Geräte/FS/Labels/UUID
df -hT            # belegter Speicher nach FS-Typ
sudo blkid        # Details inkl. UUID
```

**Mount/Umount (manuell):**

```bash
sudo mkdir -p /mnt/shared
sudo mount -t ntfs3 -o uid=$UID,gid=$(id -g),umask=022 /dev/nvme0n1pX /mnt/shared
sudo umount /mnt/shared
```

**/etc/fstab (Beispiel NTFS-Datenplatte, systemweit & mit Rechten für deinen User):**

```ini
# UUID ermitteln: lsblk -f oder blkid
UUID=DEAD-BEEF /mnt/shared ntfs3 uid=1000,gid=1000,umask=022,noatime,x-systemd.automount 0 0
```

**ExFAT (für Austausch mit Kameras/Mac/Win):**

```bash
sudo apt install exfat-fuse exfatprogs
sudo mkfs.exfat -n SHARED /dev/sdX1
```

**NTFS reparieren (nur Linux-Quickfix, echte Reparatur → Windows CHKDSK):**

```bash
sudo ntfsfix /dev/sdX1
```

---

## Archive & Komprimierung

```bash
# tar
tar -czf backup.tar.gz folder/
tar -xzf backup.tar.gz -C /ziel

# zip
zip -r pack.zip folder/
unzip pack.zip -d out/

# 7z
sudo apt install p7zip-full
7z a pack.7z folder/
7z x pack.7z -oout/
```

---

## Paketverwaltung

**Mint/Ubuntu (APT):**

```bash
sudo apt update
sudo apt upgrade -y
apt search <paket>
apt show <paket>
sudo apt install <paket>
sudo apt remove <paket>
sudo apt autoremove
```

**Flatpak (empfohlen für Desktop-Apps):**

```bash
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak search app
flatpak install flathub com.github.tchx84.Flatseal
```

**Andere Distros kurz:**

- Fedora: `dnf install …`
    
- Arch: `pacman -S …`
    

---

## SSH & Dateiübertragung

```bash
ssh-keygen -t ed25519 -C "benni@mint"
ssh-copy-id user@server
ssh user@server

# Dateien:
scp file user@server:/path/
rsync -avh --progress -e ssh folder/ user@server:/path/
```

---

## Backup & Snapshots

```bash
# Rsync "Spiegelung" mit Löschen verwaister Ziel-Dateien:
rsync -avh --delete --progress /Quelle/ /Ziel/

# Timeshift (System-Snapshots, Mint):
sudo apt install timeshift
sudo timeshift --list
sudo timeshift --create --comments "vor großen Änderungen"
```

**Borg (fortgeschritten, dedupliziert):**

```bash
sudo apt install borgbackup
borg init --encryption=repokey /pfad/zum/repo
borg create --stats /pfad/zum/repo::auto-{now} /wichtig/
```

---

## Scripting & Shebang

```bash
# myscript.sh
#!/usr/bin/env bash
set -Eeuo pipefail
IFS=$'\n\t'
echo "Hello $USER"

chmod +x myscript.sh
./myscript.sh
```

**Here-Doc:**

```bash
cat > config.ini <<'CFG'
[key]
value=123
CFG
```

---

## Shell-Komfort (Alias, Tools, Prompt)

**Aliases in `~/.bashrc`:** (siehe TL;DR-Block)

**Fuzzy-Finder (fzf) integrieren:**

```bash
# Dateien suchen + öffnen
fzf
```

**Schneller Wechsel (`zoxide`):**

```bash
z foo
```

**Moderner Prompt (Starship, optional):**

```bash
curl -sS https://starship.rs/install.sh | sh
echo 'eval "$(starship init bash)"' >> ~/.bashrc
```

**Standard-Editor festlegen:**

```bash
update-alternatives --config editor   # nano, vim, nvim …
```

---

## Sicher Löschen & Recovery-Helfer

```bash
# Papierkorb statt endgültig löschen
trash file.txt
trash-restore

# „Unveränderbar“ setzen (vorsichtig!)
sudo chattr +i wichtige_datei
sudo chattr -i wichtige_datei
```

---

## Dual-Boot: Gemeinsame Daten mit Windows

**Empfehlung:** Gemeinsame **NTFS-Datenpartition**.

1. **Windows Fast Startup & Hibernation aus** (sonst NTFS gesperrt).
    
2. **NTFS-Partition anlegen/prüfen** (Windows Datenträgerverwaltung) und **sauber herunterfahren**.
    
3. **Linux einbinden**:
    

```bash
lsblk -f                       # UUID merken
sudo mkdir -p /mnt/shared
sudo nano /etc/fstab
# Eintrag (Beispiel):
# UUID=DEAD-BEEF /mnt/shared ntfs3 uid=1000,gid=1000,umask=022,noatime,x-systemd.automount 0 0
sudo systemctl daemon-reload
sudo systemctl restart local-fs.target
```

**Zugriffsrechte:** `uid/gid` auf deinen User setzen (meist 1000).  
**Fehler „dirty bit“:** `sudo ntfsfix /dev/nvme0n1pX` und danach **unter Windows `chkdsk /f`** laufen lassen.

---

## Cinnamon/Mint per Terminal justieren (optional)

**Beispiele via `gsettings`:**

```bash
# Dark Mode (Mint-Y-Dark)
gsettings set org.cinnamon.desktop.interface gtk-theme 'Mint-Y-Dark'
gsettings set org.cinnamon.theme name 'Mint-Y-Dark'

# Favoriten (Launcher-Leiste) auslesen/setzen:
gsettings get org.cinnamon favorite-apps
gsettings set org.cinnamon favorite-apps "['nemo.desktop','firefox.desktop','code.desktop']"

# Nemo: versteckte Dateien standardmäßig anzeigen
gsettings set org.nemo.preferences show-hidden-files true
```

---

## Troubleshooting & Patterns

**1) „Befehl nicht gefunden“**  
→ `sudo apt install <paket>` oder Pfad prüfen: `which <kommando>`.

**2) „Permission denied“**  
→ Schreibrechte prüfen: `ls -ld .`, `lsattr`, ggf. `sudo chown -R $USER:$USER pfad`.

**3) „Device busy beim Umount“**  
→ `lsof +f -- /mnt/xyz` oder `fuser -m /mnt/xyz`.

**4) System langsam / hoher Load**  
→ `btop`, `iotop` (`sudo apt install iotop`), `journalctl -p 3 -xb`.

**5) Platz weg**  
→ `ncdu /`, `sudo journalctl --vacuum-time=7d`, `rm` → **nicht**; lieber `trash`.

**6) Sicher kopieren / spiegeln**  
→ `rsync -avh --delete --progress SRC/ DEST/`.

---

## Mini-Referenz (einzeilig)

```bash
# Sicht:     pwd | ll | la | tree -L 2
# Move/Copy: mv | cp -av | rsync -avh --progress
# Suche:     rg "wort" . | fd ".ext" .
# Rechte:    ls -l | chmod | chown | setfacl/getfacl
# Prozesse:  htop | btop | pgrep/pkill | kill -9 PID
# Dienste:   systemctl status NAME | journalctl -u NAME
# Netzwerk:  ip a | ss -tulpn | dig host +short | curl -I URL
# Disks:     lsblk -f | df -hT | mount/umount | blkid | ntfsfix
# Archive:   tar -czf / -xzf | zip/unzip | 7z a/x
# Packages:  apt update && apt upgrade -y | apt install NAME
# SSH:       ssh-keygen; ssh-copy-id user@host; rsync -e ssh …
# Cleanup:   trash file | trash-restore | ncdu /
```

---

## Optionale Tool-Empfehlungen (Mint/Ubuntu)

```bash
sudo apt install -y \
  git curl wget htop btop ripgrep fd-find bat eza fzf zoxide trash-cli \
  ncdu tree p7zip-full jq yq iperf3 nmap dnsutils net-tools rsync \
  timeshift exfat-fuse exfatprogs ntfs-3g
```

**Ergänzend (Flatpak):**

```bash
flatpak install flathub com.mattjakeman.ExtensionManager  # falls GNOME
flatpak install flathub org.kde.filelight                # Speicheranalyse GUI
```

---

## Notizen

- **Robust kopieren:** `rsync` statt naivem `cp -r`.
    
- **Lesbare Listen:** `eza` (oder `ls --color=auto -lh`).
    
- **Sicher löschen:** `trash-cli` ersetzt Gewohnheiten – spart Nerven.
    
- **Logs zuerst:** `journalctl -p 3 -xb` zeigt akute Fehler des heutigen Boots.
    
- **Windows-Daten:** NTFS mit `ntfs3` einhängen, Fast-Startup/Hybernation in Windows aus.
    

---

_Ende der Notiz._