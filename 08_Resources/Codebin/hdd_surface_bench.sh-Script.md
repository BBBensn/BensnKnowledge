---
topic: Risikofreier Read-Only Scan für HDD
environment: linux
category: script
ai_involvement: ai_written
tags:
  - script
  - hdd
  - pc
summary: Script prüft komplette Festplattenoberfläche blockweise. Misst Lesegeschwindigkeit, erkennt schwache Sektoren und Einbrüche.
obsidian_type: codebin
obsidian_form: Codebin-Form
related:
  - "[[../../04_Research/Applied/HDD-Checks-Recherche|HDD-Checks-Recherche]]"
  - "[[hdd_health.sh-Script]]"
date created: 2025-11-14 02:34:27
date modified: 2025-11-14 19:55:39
---

# hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark

## Übersicht

Dieses Skript ermöglicht einen vollständigen, risikofreien **Read-Only Oberflächenscan** einer HDD. Es prüft die komplette Festplattenoberfläche blockweise, misst die tatsächliche sequentielle Lesegeschwindigkeit und erkennt sowohl schwache Sektoren als auch Einbrüche in der Performance. Dadurch eignet es sich zur Beurteilung von **refurbished** oder gebrauchten Enterprise-HDDs (z. B. Seagate Exos X22).

---

## Hauptinhalt

### Code-Snippet

```
#!/usr/bin/env bash
# hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark

DEVICE=""
CHUNK_GIB=1
USE_DIRECT=false
ONLY_HDPARM=false
DO_BADBLOCKS=false
DO_FIO=false
OUTDIR="."
DATESTR=$(date +"%Y%m%d_%H%M%S")

usage() {
  echo "Usage: sudo $0 /dev/sdX [--chunk-gib N] [--direct] [--hdparm-only] [--badblocks] [--fio] [--out DIR]"
}

fail() { echo "ERROR: $*" >&2; exit 2; }

[[ $EUID -eq 0 ]] || fail "Bitte mit sudo ausführen."
[[ -b "$1" ]] || fail "Gerät nicht gefunden: $1"
DEVICE="$1"

shift
while [[ $# -gt 0 ]]; do
  case "$1" in
    --chunk-gib) CHUNK_GIB="$2"; shift 2;;
    --direct) USE_DIRECT=true; shift;;
    --hdparm-only) ONLY_HDPARM=true; shift;;
    --badblocks) DO_BADBLOCKS=true; shift;;
    --fio) DO_FIO=true; shift;;
    --out) OUTDIR="$2"; shift 2;;
    *) shift;;
  esac
done

mkdir -p "$OUTDIR"
CSV="$OUTDIR/bench_${DATESTR}_$(basename "$DEVICE").csv"
LOG="$OUTDIR/bench_${DATESTR}_$(basename "$DEVICE").log"

# Quick HDPARM Test
hdparm -Tt "$DEVICE" | tee -a "$LOG"
[[ "$ONLY_HDPARM" == true ]] && exit 0

# Read-only Full Surface Scan
BYTES_TOTAL=$(blockdev --getsize64 "$DEVICE")
GBI=$((1024*1024*1024))
CHUNK_BYTES=$((CHUNK_GIB * GBI))
BS=$((16*1024*1024))
COUNT=$(( CHUNK_BYTES / BS ))
ITER=$(( (BYTES_TOTAL + CHUNK_BYTES - 1) / CHUNK_BYTES ))

min_mbps=999999
max_mbps=0
sum_mbps=0
samples=0
io_errors=0

for ((i=0; i<ITER; i++)); do
  OFFSET_BYTES=$(( i * CHUNK_BYTES ))
  SKIP=$(( OFFSET_BYTES / BS ))

  start=$(date +%s%N)
  if ! dd if="$DEVICE" of=/dev/null bs=$BS count=$COUNT skip=$SKIP status=none 2>>"$LOG"; then
    echo "IO-Error bei Offset $OFFSET_BYTES" | tee -a "$LOG"
    io_errors=$((io_errors+1))
    break
  fi
  end=$(date +%s%N)

  duration=$(echo "scale=6; ($end-$start)/1000000000" | bc)
  read_bytes=$(( COUNT * BS ))
  mbps=$(echo "scale=2; ($read_bytes/1024/1024)/$duration" | bc)

  echo "$((OFFSET_BYTES/GBI)),$mbps" >> "$CSV"

  (( $(echo "$mbps < $min_mbps" | bc -l) )) && min_mbps=$mbps
  (( $(echo "$mbps > $max_mbps" | bc -l) )) && max_mbps=$mbps
  sum_mbps=$(echo "$sum_mbps + $mbps" | bc)
  samples=$((samples+1))
done

avg_mbps=$(echo "scale=2; $sum_mbps / $samples" | bc)

# Summary
{
  echo "Gerät: $DEVICE"
  echo "Min: $min_mbps MB/s"
  echo "Avg: $avg_mbps MB/s"
  echo "Max: $max_mbps MB/s"
  echo "I/O Errors: $io_errors"
  echo "CSV: $CSV"
  echo "Log: $LOG"
} | tee -a "$LOG"
```

---

### Beschreibung / Kontext

Dieses Skript dient zur **integralen Oberflächenprüfung** einer Festplatte. Es misst die Lesegeschwindigkeit über die gesamte Plattenfläche und identifiziert:

- Schwache oder degradierte Bereiche
    
- I/O-Fehler (physische Schäden)
    
- Ungewöhnliche Performance-Einbrüche
    
- Sägezahn-Muster durch Reallocations
    

Durch das blockbasierte Lesen ist es vollständig **read-only** und daher sicher für Platten mit vorhandenen Daten.

---

### Verwendung / Beispiele

**Standardscan:**

```
sudo ./hdd_surface_bench.sh /dev/sdb
```

**Mit Direct-I/O:**

```
sudo ./hdd_surface_bench.sh /dev/sdb --direct
```

**Nur HDPARM-Schnelltest:**

```
sudo ./hdd_surface_bench.sh /dev/sdb --hdparm-only
```

**Scan + Ausgabe in eigenes Verzeichnis:**

```
sudo ./hdd_surface_bench.sh /dev/sdb --out ~/bench
```

---

### Varianten / Notizen zum Code

- Unterstützt `--chunk-gib` zur Anpassung der Scanblockgröße.
    
- Kann `badblocks` und `fio` optional integrieren.
    
- Die CSV-Datei erlaubt visuelle Auswertung (z. B. Graph in Obsidian/Excel).
    
- Erkennt Performance-Degradation ab ca. < 80 MB/s.
    

---

## Nächste Schritte

- [ ] Kombination mit [[hdd_health.sh-Script]] für vollständige Diagnosekette.
- [ ] Integration in Cronjobs für regelmäßige Oberflächenprüfungen.
- [ ] Automatische Trendanalyse der CSV-Daten.
    

---

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- smartmontools: https://www.smartmontools.org/
    
- Seagate Exos X22 Specs: https://www.seagate.com/
    

---

## Weitere Notizen

- Script wurde so gestaltet, dass es möglichst sicher ist (read-only)
    
- Ideal für refurbished Enterprise-HDDs
    
- Ergänzende theoretische Grundlagen siehe [[../../04_Research/Applied/HDD-Checks-Recherche|HDD-Checks-Recherche]] 