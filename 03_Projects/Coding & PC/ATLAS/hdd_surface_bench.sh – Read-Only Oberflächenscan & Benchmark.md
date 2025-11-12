---

## title: "hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark" tags: [bash, linux, storage, benchmark, diagnostics] created: 2025-11-11 type: script

# hdd_surface_bench.sh – Read-Only Oberflächenscan & Benchmark-Kurve

> **Siehe auch:** [[HDD_Checks_Recherche]] · [[HDD_Checks_Skript1_hdd_health]]

## Zweck

Kompletter Lese-Durchlauf über das Laufwerk, um:

- schwache Zonen oder Einbrüche zu erkennen,
    
- echte sequentielle Lesegeschwindigkeit zu messen,
    
- I/O-Fehler (physische Defekte) sichtbar zu machen.
    

Keine Schreibzugriffe, keine Datengefährdung.

---

## Verwendung

```
sudo ./hdd_surface_bench.sh /dev/sdX [Optionen]
```

**Optionen:**

|Option|Beschreibung|
|---|---|
|`--chunk-gib N`|Chunk-Größe in GiB (Default 1)|
|`--direct`|Direct-I/O (bypasst Cache, realistischere Messung)|
|`--hdparm-only`|Nur schneller HDPARM-Test|
|`--badblocks`|Zusätzlicher read-only badblocks-Scan|
|`--fio`|FIO-Sample (8 GiB Read-Test, falls installiert)|
|`--out DIR`|Ausgabeordner für CSV und Logfiles|

---

## Skriptcode

```
# Datei: hdd_surface_bench.sh
# (siehe Originalcode im Chat; enthält vollständige Implementierung
# von Throughput-Messung, CSV-Ausgabe, Heuristik und Zusammenfassung.)
```

(Den vollständigen Bash-Code aus der Chat-Version hier einfügen.)

---

## Ergebnisdateien

- `bench_<timestamp>_<device>.csv`  
    CSV mit `offset_gib, mbps` (Messpunkte)
    
- `bench_<timestamp>_<device>.log`  
    Detailausgabe und Analyse
    

---

## Interpretation (Exos X22 Referenz)

|   |   |   |
|---|---|---|
|Zone|Erwartete Transferrate|Bewertung|
|Äußere Spuren|260–280 MiB/s|Normal|
|Innere Spuren|160–180 MiB/s|Normal|
|Einbrüche < 80 MiB/s|⚠️ Auffällig|
|I/O-Fehler|✖️ Kritisch|

Saubere Kurve → linear fallend ohne Ausreißer = Platte gesund.  
Sägezahn-Muster → häufig Defektzonen oder Re-Mapping.

---

## Kombination mit hdd_health.sh

|   |   |   |
|---|---|---|
|Schritt|Zweck|Skript|
|1|SMART-Analyse|[[HDD_Checks_Skript1_hdd_health]]|
|2|Oberflächenscan|[[HDD_Checks_Skript2_hdd_surface_bench]]|

Beide Ergebnisse zusammen liefern eine belastbare Aussage über den physischen Zustand.

---

## Hinweise

- Testlauf kann bei 22 TB mehrere Stunden dauern.
    
- Währenddessen keine Schreibvorgänge auf das Laufwerk.
    
- Nach Test → SMART erneut prüfen (`smartctl -a /dev/sdX`) um neue Fehler zu erkennen.
    
- Für Exos X22: Außenspuren ~260–280 MiB/s, Innenspuren ~160–180 MiB/s, keine harten Einbrüche.
    

---

> **Verwandte Dokumente:** [[HDD_Checks_Recherche]] · [[HDD_Checks_Skript1_hdd_health]]