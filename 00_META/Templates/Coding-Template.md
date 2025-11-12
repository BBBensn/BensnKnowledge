<% "---" %>
title: "<% tp.file.title %>"
created: "<% tp.file.creation_date('YYYY-MM-DD HH:mm') %>"
modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Coding-Form");
  tR += result.asFrontmatterString();
-%>
<% "---" %>
# <% tp.file.title %>

## Projektbeschreibung

Kurze Zusammenfassung: Ziel, Funktionalität, Kontext (z. B. Teilprojekt, Modul, Tool oder Integration).

---

## Zielsetzung / Scope

Was soll das Projekt erreichen? (Featureumfang, Zielgruppe, Constraints, Abgrenzung zu anderen Modulen)

---

## Architektur / Struktur

- Module / Komponenten / Services
    
- Datenflüsse / API-Verbindungen
    
- Frameworks / Bibliotheken
    
- Schnittstellen zu externen Tools
    

---

## Technologien / Stack

|Kategorie|Technologie / Version|Zweck / Kommentar|
|---|---|---|
|Backend|||
|Frontend|||
|Datenbank|||
|Tools / CI|||

---

## Setup / Installation

1. Voraussetzungen (Node-Version, Python, Docker etc.)
    
2. Installation / Build-Schritte
    
3. Konfigurationsdateien (.env, Configs)
    
4. Start / Run Commands
    

---

## Code-Struktur / Files

Kurze Übersicht wichtiger Ordner, Dateien oder Entry Points:

```
/project-root
├── src/
│   ├── components/
│   ├── routes/
│   ├── utils/
│   └── main.js
├── public/
├── package.json
└── README.md
```

---

## API / Datenfluss

Falls relevant:

- Endpoints, Input/Output, Auth, Beispielrequests
    
- Datenstrukturen (z. B. JSON-Response)
    

---

## Tests / Debugging

- Unit-/Integrationstests
    
- Teststrategie / Tools
    
- Logging / Fehlerbehandlung
    

---

## Bekannte Probleme / Bugs

-  Offene Issues / Todos
    
-  Temporäre Workarounds
    

---

## Weiterentwicklung / Ideen

-  Geplante Features
    
-  Technische Schulden
    
-  Refactoring-Punkte
    

---

## Referenzen / Links

- Repos, Branches, Dokumentationen, externe Ressourcen
    

---

## Siehe auch

Siehe auch: <% result.get("related") %>  
Repo - Link: <% result.get("repo") %>