<% "---" %>
title: "<% tp.file.title %>"
created: "<% tp.file.creation_date('YYYY-MM-DD HH:mm') %>"
modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Note_Idea-Form");
  tR += result.asFrontmatterString();
-%>
<% "---" %>
# <% tp.file.title %>

## Problem / Opportunity

Kurze Beschreibung des Problems bzw. der Gelegenheit; Status quo, Pain Points, warum jetzt.

---

## Zielsetzung

Was soll diese Idee konkret erreichen? Messbare Ziele, Success Criteria (SMART, sofern sinnvoll).

---

## Hypothese / Value Proposition

Zentrale Annahme(n) und der Nutzen für Nutzer:innen/Stakeholder. Welche Veränderung tritt ein?

---

## Zielgruppen / Use-Cases

- Primäre Nutzergruppen / Stakeholder
    
- Wichtigste Use-Cases / Jobs-to-be-done
    

---

## Lösungsskizze / Kernfunktion(en)

Kurze Skizze der Lösung, MVP-Umfang, Kernfeatures; Abgrenzung: was **nicht** Teil des MVP ist.

---

## Architektur / Struktur (High Level)

- Komponenten / Module
    
- Datenflüsse / Schnittstellen
    
- Systemgrenzen / Annahmen
    

---

## Risiken / Annahmen / Unbekannte

- Technische Risiken
    
- Produkt-/Nutzungsrisiken
    
- Abhängigkeiten (Team, Zeit, Tools, Daten)
    

---

## Experiment / Validierung

- Was testen? (Metriken, Signale)
    
- Wie testen? (Proto/MVP, Wizard-of-Oz, Dogfooding, Interviews)
    
- Abbruch- oder Go-Kriterien
    

---

## Nächste Schritte / To-Do

-  Schritt 1
    
-  Schritt 2
    
-  Schritt 3
    

---

## Referenzen / Links

- Quellen, Benchmarks, ähnliche Lösungen
    

---

## Siehe auch

Siehe auch: <% result.get("related") %>  
Repo - Link: <% result.get("repo") %>