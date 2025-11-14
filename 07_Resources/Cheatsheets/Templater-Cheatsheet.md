---
topic: Templater Cheatsheet
environment: plugin
program:
  - Obsidian
plugin:
  - Templater
ai_involvement: partly_ai
tags:
  - shortcuts
  - templater
  - commands
summary: Übersicht über Templater Funktionen, Befehle und Shortcuts.
obsidian_type: cheatsheet
obsidian_form: Cheatsheet-Form
related:
  -
date created: 2025-11-14 03:59:52
date modified: 2025-11-14 19:56:27
---

# Templater-Cheatsheet


## Übersicht

Templater ist ein erweitertes Template-System für Obsidian. Er ermöglicht dynamische Inhalte wie Datum, Dateiinformationen und komplexe JavaScript-Logik. Relevanz: Automatisierung, Konsistenz und schnelle Generierung einheitlicher Notizen.

## Cheatsheet-Inhalt

### Kontext & Geltungsbereich

Dieses Cheatsheet deckt die wichtigsten Funktionen des Obsidian-Templater-Plugins ab: Syntax, Tags, Variablen, JavaScript-Nutzung, typische Fehler und Best Practices.

### Kernbefehle / Grundbausteine

#### Templater-Tags

- Inline-Tag: `<% ... %>`
    
- Block-Tag: `<%* ... %>`
    

#### Zentrale Objekte

- `tp` – Templater Parser
    

#### Datei & Pfad

- `<% tp.file.title %>`
    
- `<% tp.file.path() %>`
    
- `<% tp.file.folder() %>`
    

#### Datum & Zeit

- `<% tp.date.now() %>`
    
- `<% tp.date.now("YYYY-MM-DD HH:mm") %>`
    
- `<% tp.date.tomorrow("YYYY-MM-DD") %>`
    

#### User Input

- `<% tp.prompt("Text:") %>`
    
- `<% tp.system.suggester(list, display) %>`
    

#### Links & Einfügen

- `<% tp.file.include("Pfad/zur/Datei") %>`
    
- `<% tp.file.cursor() %>`
    

### Beispiele & Patterns

#### JavaScript Block

```
<%*
const project = await tp.prompt("Projekt:");
tR += `# ${project}\nErstellt am ${tp.date.now("DD.MM.YYYY")}`;
%>
```

#### Mehrzeilige Ausgabe

```
<%*
let tech = await tp.prompt("Tech:");
tR += `---\nTitel: ${tp.file.title}\nTech: ${tech}`;
%>
```

#### User Scripts

```
module.exports = async (tp) => {
  const tech = await tp.prompt("Tech:");
  return tech || "unspecified";
};
```

Aufruf:

```
<% tp.user.tech_stack() %>
```

### Häufige Fehler / Stolperfallen

- System Commands deaktiviert → führt zu Fehlern bei `tp.system.*`
    
- Syntaxfehler durch unvollständige Tags `<%` oder `%>`
    
- User Script nicht gefunden → Pfad prüfen
    
- Fehlende Reloads nach Änderungen
    

## Nächste Schritte

- [ ] Ergänzen eigener Patterns
- [ ] Aufbau einer eigenen Script-Bibliothek
- [ ] Überarbeitung persönlicher Templates
    

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- https://github.com/SilentVoid13/Templater
    
- https://silentvoid13.github.io/Templater/
    

## Weitere Notizen

Notizen zu eigenen Template-Ideen, neue Skripte, häufig verwendete Variablen oder zukünftige Erweiterungen.