---
date: 2025-11-02
related:
  - - KnowledgeVault
status: draft
tags:
  - obsidian
  - templater
  - automation
  - markdown
  - chat-gpt
  - ai
title: Templater Überblick
---

# 🧩 Obsidian Templater -- Übersicht & Verwendung

Der **Templater** ist eines der mächtigsten Obsidian-Plugins. Er erlaubt
dir, **Templates mit dynamischem Inhalt** zu erstellen -- von Datum und
Dateiname bis hin zu **komplexen Skripten mit JavaScript-Logik**.

------------------------------------------------------------------------

## 📚 Grundprinzip

Templater ersetzt in deinen Markdown-Dateien **Platzhalter (Tags)**
durch **generierte Inhalte**.\
Diese Platzhalter beginnen immer mit `<%` und enden mit `%>`.

Es gibt zwei Varianten:

  ---------------------------------------------------------------------------
  Typ            Syntax                  Beschreibung
  -------------- ----------------------- ------------------------------------
  **Inline Tag** `<% tp.date.now() %>`   Wird direkt im Text ersetzt

  **Block Tag**  `<%* ... %>`            Führt JavaScript-Code aus (mehrere
                                         Zeilen)
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧠 Interne Variablen (`tp.`)

Templater stellt ein zentrales Objekt `tp` (Templater Parser) zur
Verfügung.\
Darüber rufst du alle Funktionen und Variablen auf.

### 🔹 Datei & Pfad

  ----------------------------------------------------------------------------------------------
  Tag                        Beschreibung               Beispielausgabe
  -------------------------- -------------------------- ----------------------------------------
  `<% tp.file.title %>`      Dateiname ohne Endung      `Coding-Template`

  `<% tp.file.path() %>`     Vollständiger Pfad zur     `00_META/Templates/Coding-Template.md`
                             aktuellen Datei            

  `<% tp.file.folder() %>`   Ordnername                 `Templates`
  ----------------------------------------------------------------------------------------------

### 🔹 Datum & Zeit

  -----------------------------------------------------------------------------------------------------
  Tag                                       Beschreibung               Beispielausgabe
  ----------------------------------------- -------------------------- --------------------------------
  `<% tp.date.now() %>`                     Aktuelles Datum            `2025-11-02`

  `<% tp.date.now("YYYY-MM-DD HH:mm") %>`   Mit Uhrzeit                `2025-11-02 14:32`

  `<% tp.date.tomorrow("YYYY-MM-DD") %>`    Nächster Tag               `2025-11-03`
  -----------------------------------------------------------------------------------------------------

### 🔹 Benutzerdefinierte Eingaben

  -------------------------------------------------------------------------------------------------------------------
  Tag                                                       Beschreibung                      Beispiel
  --------------------------------------------------------- --------------------------------- -----------------------
  `<% tp.prompt("Titel eingeben:") %>`                      Zeigt Eingabefeld                 `→ Eingabe des Users`

  `<% tp.system.suggester(["A","B"],["Alpha","Beta"]) %>`   Dropdown-Auswahl                  `Alpha`
  -------------------------------------------------------------------------------------------------------------------

> ⚠️ `tp.system.suggester()` funktioniert nur, wenn **System Commands
> aktiviert** sind.

### 🔹 Links & Einfügen

  -----------------------------------------------------------------------------------------------------
  Tag                                         Beschreibung                      Beispiel
  ------------------------------------------- --------------------------------- -----------------------
  `<% tp.file.include("Pfad/zur/Datei") %>`   Fügt andere Datei ein             Fügt deren Inhalt
                                                                                inline ein

  `<% tp.file.cursor() %>`                    Setzt Cursor an diese Stelle      Cursor springt
                                                                                automatisch hierher
  -----------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## ⚙️ JavaScript im Templater

Du kannst in Block-Tags (`<%* ... %>`) **beliebigen JS-Code** ausführen:

``` markdown
<%*
const project = await tp.prompt("Projektname:");
tR += `# ${project}
Erstellt am ${tp.date.now("DD.MM.YYYY")}`;
%>
```

### ➕ Mehrzeilige Templates

Blocktags sind besonders nützlich, wenn du Variablen kombinieren willst:

``` markdown
<%*
let tech = await tp.prompt("Tech-Stack:");
tR += `---\nTitel: ${tp.file.title}\nTech: ${tech}`;
%>
```

------------------------------------------------------------------------

## 🧩 Struktur & Arbeitsweise

Ein Template besteht meist aus **YAML-Header** und **Markdown-Body**:

``` markdown
---
title: "<% tp.file.title %>"
date: "<% tp.date.now('YYYY-MM-DD') %>"
tags:
  - project
  - coding
  - "<% tp.user.tech_stack() %>"
status: draft
---

# <% tp.file.title %>
## Zielsetzung
## Architektur / Struktur
```

### 📁 Empfehlung für Ordnerstruktur

    00_META/
    ├── Templates/
    │   ├── Coding-Template.md
    │   ├── Research-Template.md
    │   └── Tutorial-Template.md
    └── Templater_Scripts/
        └── tech_stack.js

------------------------------------------------------------------------

## 🧩 Eigene Skripte (User Scripts)

Du kannst eigene Funktionen schreiben, z. B. in
`00_META/Templater_Scripts/`:

``` javascript
module.exports = async (tp) => {
  const tech = await tp.prompt("Tech-Stack:");
  return tech || "unspecified";
};
```

Im Template rufst du sie auf mit:

``` markdown
<% tp.user.tech_stack() %>
```

------------------------------------------------------------------------

## ⚠️ Häufige Fehler

  ----------------------------------------------------------------------------------------------------------------
  Fehler                                                     Ursache                     Lösung
  ---------------------------------------------------------- --------------------------- -------------------------
  `Cannot read properties of undefined (reading 'system')`   System Commands deaktiviert In
                                                                                         Templater-Einstellungen
                                                                                         aktivieren

  `Template parsing error, aborting`                         Syntaxfehler im Template    Überprüfe `<%` und `%>`

  `tp.user.xyz is not a function`                            Script nicht erkannt        Pfad oder Dateiname
                                                                                         prüfen, Reload
                                                                                         durchführen
  ----------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔄 Nützliche Commands

  ------------------------------------------------------------------------------------------
  Command                                         Beschreibung
  ----------------------------------------------- ------------------------------------------
  `Templater: Open insert template modal`         Template aus Liste einfügen

  `Templater: Replace templates in active file`   Ersetzt alle Templater-Tags in Datei

  `Templater: Create new note from template`      Erstellt neue Datei auf Basis eines
                                                  Templates

  `Templater: Jump to next cursor location`       Springt zu `<% tp.file.cursor() %>`
  ------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧩 Best Practices

✅ Verwende **YAML + Markdown-Kombinationen** für Struktur\
✅ Teste Templates zuerst manuell mit `Replace in active file`\
✅ Lagere Funktionen in **Templater_Scripts** aus, nicht in Templates\
✅ Nutze Blocktags `<%* ... %>` für mehrzeilige oder kombinierte
Ausgaben\
✅ Vermeide führende `/` im Pfad (Templater braucht relative
Vault-Pfade)

------------------------------------------------------------------------

## 📘 Weiterführend

-   [Templater GitHub
    Repository](https://github.com/SilentVoid13/Templater)
-   [Offizielle
    Dokumentation](https://silentvoid13.github.io/Templater/)
-   \[\[Obsidian Workflow\]\]
