---

## title: "HDD-Gesundheitsprüfung & Beurteilung" tags: [linux, hardware, storage, hdd, smart, benchmark] created: 2025-11-11 type: recherche

# HDD-Gesundheitsprüfung & Beurteilung

> **Siehe auch:** [[HDD_Checks_Skript1_hdd_health]] · [[HDD_Checks_Skript2_hdd_surface_bench]]

## Ziel

Zuverlässige Einschätzung des Zustands gebrauchter oder „refurbished“ Festplatten, insbesondere **Seagate Exos X22 (22 TB)**.  
Fokus: Datenintegrität, Oberflächenfehler, Alter, Temperatur, Performance.

date created: 2025-11-11 22:26:28
date modified: 2025-11-14 02:29:04
---

## Relevante Prüfpunkte

### 1. SMART-Werte (Self-Monitoring, Analysis and Reporting Technology)

Zeigen, ob die Platte fehlerhafte oder neu zugewiesene Sektoren hat.

**Kommando (Linux):**

```
sudo smartctl -a /dev/sdX
```

**Wichtige Attribute:**

|ID|Bezeichnung|Bedeutung|Idealwert|
|---|---|---|---|
|5|Reallocated_Sector_Ct|Anzahl neu zugewiesener Sektoren|0|
|9|Power_On_Hours|Betriebsstunden|< 15 000 h (top), < 30 000 h (ok)|
|12|Power_Cycle_Count|Start/Stopp-Zyklen|< 300|
|187|Reported_Uncorrect|Unkorrigierbare Lesefehler|0|
|188|Command_Timeout|Timeouts des Controllers|0|
|190|Airflow_Temperature|Durchschnittstemperatur|< 55 °C|
|193|Load_Cycle_Count|Kopf-Parkvorgänge|< 50 000|
|194|Temperature_Celsius|Aktuelle Temperatur|< 45 °C|
|197|Current_Pending_Sector|Sektoren in Wartezustand|0|
|198|Offline_Uncorrectable|Permanente Lesefehler|0|
|199|UDMA_CRC_Error_Count|Kabel- oder Portfehler|0|
|240|Head_Flying_Hours|Flugzeit der Köpfe|≈ Power_On_Hours|

**K.O.-Kriterien:** Reallocated, Pending oder Uncorrectable > 0 → Platte unbrauchbar.

---

### 2. SMART-Error-Logs

Fehlerhistorie, oft aufschlussreicher als der Gesamtstatus.

```
sudo smartctl -l error /dev/sdX
```

Leere Liste → gut.  
Einträge → nicht verwenden.

---

### 3. Oberflächentest / Sektortest

Prüft, ob Blöcke physisch lesbar sind.

**Read-Only Test:**

```
sudo badblocks -sv /dev/sdX
```

**Alternativ: schneller Durchlauf:**

```
sudo dd if=/dev/sdX of=/dev/null bs=1M status=progress
```

→ Liest alles, meldet I/O-Fehler sofort.

---

### 4. Temperatur- und Geräuschbeobachtung

- > 50 °C → kritisch
    
- Klick-/Parkgeräusche → Warnsignal
    

---

### 5. Performance / Benchmark

Konstante Geschwindigkeit → gesunde Oberfläche.  
Einbrüche oder Schwankungen → beginnende Defekte.

```
sudo hdparm -tT /dev/sdX
```

oder grafisch:

```
gnome-disks → Benchmark
```

---

## Bewertungskriterien für gebrauchte Exos-Platten

|   |   |   |
|---|---|---|
|Kategorie|Zustand|Beschreibung|
|**SMART OK**|✔️|Keine defekten Sektoren, kein Fehlerlog|
|**Leistung stabil**|✔️|260 → 180 MB/s gleichmäßig fallend|
|**Power_On_Hours < 15 000**|🟢|Geringer Verschleiß|
|**15 000–30 000 h**|🟡|Moderat gebraucht|
|**> 30 000 h**|🔴|Stark gebraucht|
|**Temperatur < 45 °C**|✔️|Normal|
|**I/O-Errors im Scan**|✖️|Ausschlusskriterium|

---

## Grenzen der Eigenprüfung

- Frühere Defekt-Remappings können durch Reset unsichtbar sein.
    
- Spindel- oder Lager-Verschleiß ist akustisch, nicht messbar.
    
- Keine 100 %-Garantie → immer **RAID + Backup** nutzen.
    

---

## Prüfstrategie (empfohlene Reihenfolge)

1. [[../../../07_Resources/Cheatsheets/HDD Check/hdd_health.sh — SMART-Analyse|hdd_health.sh — SMART-Analyse]] → SMART & Fehlerlog
    
2. [[../../../07_Resources/Cheatsheets/HDD Check/hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark|hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark]] → Vollscan & Benchmark-Kurve
    
3. Sicht-/Hörkontrolle (Temperatur, Geräusche)
    
4. Danach nur in RAID + mit Backup einsetzen.