---
topic: HDD-Health-Check
environment: linux
category: script
ai_involvement: ai_written
tags:
  - pc
  - hdd
  - script
summary: Bewertung aller SMART-Attribute. Gibt klaren Status OK/WARN/FAIL.
obsidian_type: codebin
obsidian_form: Codebin-Form
related:
  - "[[../../04_Research/Applied/HDD Checks Recherche|HDD Checks Recherche]]"
  - "[[hdd_surface_bench.sh-Script]]"
date created: 2025-11-14 02:15:07
date modified: 2025-11-14 02:44:33
---

# hdd_health.sh – SMART-Analyse & Gesundheitsbewertung

## Übersicht

Automatisierte Analyse und Bewertung der wichtigsten SMART-Attribute zur Festplatten-Diagnose. Das Skript prüft die physische Integrität einer HDD und gibt eine klare Zustandsbewertung (**OK / WARN / FAIL**) aus. Optional kann ein JSON-Report erzeugt werden.


## Hauptinhalt

### Code-Snippet

```
# Datei: hdd_health.sh
# Beschreibung: Führt SMART-Auswertung durch, prüft alle kritischen Attribute
# und liefert Statusbewertung + optionalen JSON-Output.

#!/bin/bash

DEVICE=$1
STRICT=false
JSON=false
SELFTEST=""

# Argumente prüfen
for arg in "$@"; do
  case $arg in
    --strict) STRICT=true ;;
    --json) JSON=true ;;
    --self-test*) SELFTEST=$(echo $arg | cut -d'=' -f2) ;;
  esac
done

if [ -z "$DEVICE" ]; then
  echo "Verwendung: sudo ./hdd_health.sh /dev/sdX [--json] [--strict] [--self-test short|long]"
  exit 1
fi

smartctl -a $DEVICE > /tmp/smartdata.txt
STATUS="OK"

check_value() {
  local ID=$1
  local VALUE=$(grep "^$ID" /tmp/smartdata.txt | awk '{print $10}')
  echo $VALUE
}

PENDING=$(check_value 197)
UNCORR=$(check_value 198)
REALLOC=$(check_value 5)
TEMP=$(grep Temperature_Celsius /tmp/smartdata.txt | awk '{print $10}')
HOURS=$(check_value 9)

if (( PENDING > 0 || UNCORR > 0 )); then STATUS="FAIL"; fi
if (( REALLOC > 0 && STATUS != "FAIL" )); then STATUS="WARN"; fi
if (( TEMP > 45 && STATUS == "OK" )); then STATUS="WARN"; fi
if $STRICT && (( HOURS > 20000 )); then STATUS="WARN"; fi

if $JSON; then
  echo "{\"device\":\"$DEVICE\",\"status\":\"$STATUS\",\"temp\":$TEMP,\"hours\":$HOURS,\"realloc\":$REALLOC,\"pending\":$PENDING,\"uncorrectable\":$UNCORR}"
else
  echo "SMART-Status für $DEVICE: $STATUS"
  echo "Temp: $TEMP°C, Betriebsstunden: $HOURS, Reallocated: $REALLOC, Pending: $PENDING, Uncorrectable: $UNCORR"
fi

if [ -n "$SELFTEST" ]; then
  smartctl -t $SELFTEST $DEVICE
fi
```


### Beschreibung / Kontext

Dieses Skript dient der **automatisierten Analyse von HDDs** (z. B. Seagate Exos X22) über SMART-Werte. Es kann zur Qualitätsprüfung von **refurbished** oder gebrauchten Festplatten genutzt werden. Durch die Nutzung von `smartctl` werden alle relevanten Attribute ausgelesen, bewertet und zusammengefasst.

- Unterstützt optionale Flags `--strict`, `--json` und `--self-test`.
    
- Ideal für regelmäßige Checks im NAS oder Server.
    
- Kombinierbar mit [[hdd_surface_bench.sh-Script]] zur Oberflächenprüfung.
    


### Verwendung / Beispiele

**Standardausführung:**

```
sudo ./hdd_health.sh /dev/sdb
```

**Strenger Modus mit JSON-Ausgabe:**

```
sudo ./hdd_health.sh /dev/sdb --strict --json
```

**Selbsttest:**

```
sudo ./hdd_health.sh /dev/sdb --self-test=short
```


### Varianten / Notizen zum Code

- Der Parameter `--strict` senkt die Toleranz für Betriebsstunden.
    
- `--json` ist für Log-Parser oder NAS-Überwachungssysteme gedacht.
    
- Optional kann ein Langzeittest (`--self-test=long`) durchgeführt werden.
    


## Nächste Schritte

- Integration in Cronjobs zur automatischen HDD-Überwachung.
    
- Verknüpfung der JSON-Ausgabe mit zentralem NAS-Monitoring.
    
- Erweiterung um Temperaturtrend-Analyse.
    


## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- [smartmontools Dokumentation](https://www.smartmontools.org/)
    
- [Seagate Exos X22 Datenblatt](https://www.seagate.com/)
    


## Weitere Notizen

- Das Skript ist auf Linux optimiert und nutzt `smartctl` aus `smartmontools`.
    
- Für Windows-Versionen kann `smartctl.exe` aus den gleichen Tools verwendet werden.
    
- Ergänzende Analyse über [[../../04_Research/Applied/HDD Checks Recherche|HDD Checks Recherche]] empfohlen.

- Kombination mit [[hdd_surface_bench.sh-Script]] für vollständige Diagnosekette.