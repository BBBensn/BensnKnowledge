---

## title: "hdd_health.sh – SMART-Analyse & Gesundheitsbewertung" tags: [bash, linux, storage, smartctl, diagnostic] created: 2025-11-11 type: script

# hdd_health.sh – SMART-Analyse

> **Siehe auch:** [[HDD_Checks_Recherche]] · [[HDD_Checks_Skript2_hdd_surface_bench]]

## Zweck

Automatisierte Bewertung aller wichtigen SMART-Attribute.  
Gibt einen klaren Gesamtstatus **OK / WARN / FAIL** und optional JSON-Output für spätere Automatisierung.

---

## Verwendung

```
sudo ./hdd_health.sh /dev/sdX [--json] [--strict] [--self-test short|long]
```

**Optionen:**

|Option|Beschreibung|
|---|---|
|`--json`|Ausgabe im JSON-Format (für Logging/Monitoring)|
|`--strict`|Engere Grenzwerte (empfohlen bei Refurbished-Platten)|
|`--self-test short|long`|Startet internen SMART-Selbsttest|

**Beispiel:**

```
sudo ./hdd_health.sh /dev/sdb --strict --self-test short
```

---

## Skriptcode

```
# Datei: hdd_health.sh
# (siehe Originalcode im Projekt; vollständige Fassung enthält SMART-Auswertung,
# Bewertung nach Schwellenwerten, JSON-Export, Selftest-Trigger)
```

(Den vollständigen Bash-Code aus der Chat-Version hier einfügen.)

---

## Bewertungslogik

**K.O.-Kriterien (→ FAIL):**

- `Current_Pending_Sector` > 0
    
- `Offline_Uncorrectable` > 0
    
- `Reported_Uncorrect` > 0
    
- SMART Overall ≠ PASSED
    
- Fehlerlog ≠ leer
    

**Warnkriterien (→ WARN):**

- `Reallocated_Sector_Ct` > 0
    
- `Command_Timeout` > 0
    
- `UDMA_CRC_Error_Count` > 0
    
- `Power_On_Hours` > 20 000 h (strict) / > 30 000 h (default)
    
- Temperatur ≥ 46 °C
    

---

## Interpretation

|   |   |   |
|---|---|---|
|Status|Bedeutung|Empfehlung|
|✔️ OK|Keine Anomalien|Platte verwendbar|
|⚠️ WARN|Leichte Auffälligkeiten|Nur mit Backup / sekundär|
|✖️ FAIL|Kritisch|Nicht verwenden|

---

## Hinweise

- Kombinierbar mit [[HDD_Checks_Skript2_hdd_surface_bench]] für vollständige Diagnose.
    
- Läuft schnell, kann regelmäßig (z. B. via Cron) ausgeführt werden.
    
- JSON-Output ideal für NAS-Monitoring oder Log-Parser.
    
- Ergänzende Hintergrundinfos siehe [[HDD_Checks_Recherche]].