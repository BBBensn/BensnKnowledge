---
topic: Obsidian Mardown Cheatsheet
environment: program
program:
  - Obsidian
ai_involvement: partly_ai
tags:
  - markdown
summary: Übersicht über die Obsidian Markdown Syntax.
obsidian_type: cheatsheet
obsidian_form: Cheatsheet-Form
related:
  -
date created: 2025-11-14 03:48:51
date modified: 2025-11-14 03:52:33
---

# Obsidian-Markdown-Cheatsheet


## Übersicht

Dieses Cheatsheet fasst die vollständige Obsidian-kompatible Markdown-Syntax zusammen – inklusive Formatierung, Listen, Aufgaben, Tabellen, Code, Callouts und Spezialfunktionen. Es dient als Referenz für tägliche Arbeit im Vault.

## Cheatsheet-Inhalt

### Kontext & Geltungsbereich

Dieses Cheatsheet gilt für Standard-Markdown (CommonMark) **plus alle Obsidian-Erweiterungen** wie Callouts, interne Links, Highlighting und Kommentare. Nicht enthalten sind Plugins wie Dataview oder Templater.

### Kernbefehle / Grundbausteine

**Überschriften:**

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

**Textformatierung:**

```
*kursiv*  
**fett**  
***fett & kursiv***  
~~durchgestrichen~~  
==markiert==  
^hochgestellt^  
~tiefgestellt~
```

**Absätze & Umbrüche:**

```
Textblock

Neuer Absatz
Zeilenumbruch ⟶ zwei Leerzeichen am Zeilenende  
```

**Listen (ungeordnet & geordnet):**

```
- Punkt
* Punkt
+ Punkt
1. Erster Punkt
2. Zweiter Punkt
```

**Aufgabenlisten:**

```
- [ ] Offen
- [x] Erledigt
```

**Links:**

```
[Externer Link](https://example.com)
[[Interner Link]]
[[Seite#Bereich]]
[[Seite|Angezeigter Text]]
```

**Bilder:**

```
![Alt-Text](pfad/bild.png)
![Alt-Text](pfad/bild.png "Titel")
```

**Code:**

```
`inline code`
```

````
```python
print("Hello World")
````

````

**Trennlinien:**
```md
---
***
___
````

### Beispiele & Patterns

**Alphabetische Listen (manuell):**

```
a. Erster Punkt
b. Zweiter Punkt
   i. Unterpunkt
```

**Punktzeichen (Unicode):**

```
• manueller Punkt (kein echtes Markdown-Listenelement)
```

**Callouts (Obsidian):**

```
> [!note]
> Hinweistext

> [!warning]
> Warnung

> [!tip]
> Tipp

> [!quote]
> „Zitat“
```

**Tabellen:**

```
| A | B | C |
|---|---|---|
| 1 | 2 | 3 |
```

```
| Links | Mitte | Rechts |
|:------|:-----:|-------:|
| L     |   M   |     R  |
```

**Kommentare:**

```
%% Dieser Text erscheint nicht in der Vorschau %%
```

**Inline-HTML:**

```
<span style="color:red;">roter text</span>
```

### Häufige Fehler / Stolperfallen

- Listen ohne führenden `-`, `*` oder `+` erzeugen **keine** Checkboxen.
    
- `•` wirkt optisch wie ein Listenpunkt, ist aber **kein Markdown-Element**.
    
- Tabellen benötigen zwingend eine Header-Zeile und Trennlinie.
    
- Leerzeile nach Codeblöcken oft notwendig, um Rendering-Fehler zu vermeiden.
    
- Templater und Markdown dürfen nicht vermischt werden, wenn Syntax identisch aussieht.
    

## Nächste Schritte

- Erweiterung um Dataview-Beispiele.
    
- Ergänzung um Templater-Shortcodes & Snippets.
    

## Links & Referenzen

### Interne Links

```
LIST from outgoing([[]])
```

### Externe Links

- https://help.obsidian.md/How+to/Format+your+notes
    

## Weitere Notizen

Zusätzliche Markdown-Elemente können hier ergänzt werden, z. B. HTML-Blöcke, CSS-Snippets oder Plugin-spezifische Markups.