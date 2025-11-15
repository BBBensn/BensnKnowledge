---
topic: Healthcheck für gebrauchte HDDs
context: coding
question: Kann ich gebrauchte HDDs verläslich prüfen?
methodology: theoretic_research
sources: Chat-GPT 5.1
status: done
ai_involvement: ai_written
tags:
  - hdd
  - pc
summary: Recherche zur Überprüfung gebrauchte oder refurbished HDDs.
obsidian_type: research
obsidian_form: Research-Form
related:
  -
date created: 2025-11-14 18:13:58
date modified: 2025-11-15 11:02:33
---

# HDD-Checks-Recherche


## Übersicht

Recherche zu Methoden der Gesundheitsprüfung gebrauchter oder refurbished HDDs, insbesondere Seagate Exos X22 (22 TB). Relevanz: Bewertung von Zuverlässigkeit, Oberflächenzustand, Alter, Temperatur und Performance.

### Fragestellung & Zielsetzung

Wie lässt sich der technische Zustand einer gebrauchten HDD zuverlässig beurteilen, und welche Prüfverfahren liefern eine valide Aussage über Oberflächenfehler, Alterungszustand und zukünftige Betriebssicherheit?

### Hintergrund & Kontext

Gebrauchte Enterprise-HDDs werden häufig als „refurbished“ verkauft. Ihre Qualität variiert stark. Eine strukturierte Prüfung ist erforderlich, um Risiken wie Oberflächenschäden, defekte Sektoren oder Controllerfehler frühzeitig zu erkennen. Relevant für Heimserver, NAS-Setups und RAID-Konfigurationen.

### Analyse

#### SMART-Werte

Wesentliche Attribute zur Bewertung des Plattenzustands:

- `Reallocated_Sector_Ct`: Muss 0 sein.
    
- `Current_Pending_Sector`: Muss 0 sein.
    
- `Offline_Uncorrectable`: Muss 0 sein.
    
- `Reported_Uncorrect`: Hinweis auf unkorrigierbare Fehler.
    
- `Power_On_Hours`: Ideal < 15 000 h.
    
- `Load_Cycle_Count`: Kein übermäßiger Parkverschleiß.
    
- `UDMA_CRC_Error_Count`: Kabel-/Portfehler ausschließen.
    

Kommando zur Abfrage:

```
sudo smartctl -a /dev/sdX
```

SMART-Error-Log:

```
sudo smartctl -l error /dev/sdX
```

Leeres Log = gut; Einträge = Ausschlussgrund.

#### Oberflächen- / Sektortest

Read-Only Tests zur Überprüfung der physischen Lesbarkeit:

```
sudo badblocks -sv /dev/sdX
```

Schneller Durchlauf:

```
sudo dd if=/dev/sdX of=/dev/null bs=1M status=progress
```

#### Temperatur- & Geräuschverhalten

- > 50 °C problematisch.
    
- Klick-/Parkgeräusche: Hinweis auf mechanische Probleme.
    

#### Performance / Benchmark

Konstante Transferraten sind ein Indikator für eine gesunde Oberfläche.

```
sudo hdparm -tT /dev/sdX
```

Grafische Option:

```
gnome-disks → Benchmark
```

### Erkenntnisse

- Bereits geringe SMART-Abweichungen (Reallocated/Pending > 0) disqualifizieren eine Platte.
    
- Ein vollständiger Read-Only Scan ist unverzichtbar, da SMART allein Oberflächenfehler nicht zuverlässig erkennt.
    
- Performanceeinbrüche oder ungleichmäßige Transferkurven deuten auf Oberflächenprobleme hin.
    
- Enterprise-HDDs können selbst mit höheren Power-On-Hours noch brauchbar sein, wenn alle anderen Werte einwandfrei sind.
    

### Offene Fragen

- In welchem Ausmaß können Hersteller-Refurbishings SMART-Werte zurücksetzen?
    
- Welche Unterschiede ergeben sich zwischen Modellen derselben Serie (z. B. EXOS X18 → X22) im Verschleißverhalten?
    

## Nächste Schritte

- [ ] Durchführung eigener Benchmarks anhand der beiden Skripte:
	- [ ] [[../../08_Resources/Codebin/hdd_health.sh-Script|hdd_health.sh-Script]] 
	- [ ] [[../../08_Resources/Codebin/hdd_surface_bench.sh-Script|hdd_surface_bench.sh-Script]] 
        
- [ ] Vergleich mehrerer gebrauchter Platten derselben Charge.
- [ ] Dokumentation der Benchmark-Kurven.
- [ ] Integration der Tests in einen wiederholbaren Workflow.
    

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

## Weitere Notizen

Zusätzliche Beobachtungen bei späteren Tests, Unterschiede zwischen Anbietern, Preis-Leistungs-Einschätzungen oder ergänzende Tools für erweiterte Diagnostik.