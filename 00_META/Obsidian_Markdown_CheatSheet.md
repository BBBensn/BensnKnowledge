# 📘 Markdown Cheat Sheet (Obsidian-kompatibel)

---

## 🧭 Überschriften

```md
# H1 Überschrift
## H2 Überschrift
### H3 Überschrift
#### H4 Überschrift
##### H5 Überschrift
###### H6 Überschrift
```

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## ✍️ Textformatierung

```md
*kursiv* oder _kursiv_
**fett**
***fett und kursiv***
~~durchgestrichen~~
==markiert==
^hochgestellt^
~tiefgestellt~
```

Ergebnis:  
*kursiv*, **fett**, ***fett & kursiv***, ~~durchgestrichen~~, ==markiert==, H₂O^2^

---

## 📄 Absätze & Zeilenumbrüche

```md
Ein Absatz endet mit einer Leerzeile.

Zeilenumbruch  
mit zwei Leerzeichen am Zeilenende.
```

---

## 🗂️ Listen (Aufzählungen)

Markdown unterstützt verschiedene Arten von Aufzählungen.

### 🔹 Ungeordnete Listen

```md
- Bindestrich als Aufzählungszeichen
* Sternchen als Aufzählungszeichen
+ Pluszeichen als Aufzählungszeichen
• Punktzeichen (Unicode: Alt+0149) funktioniert auch in Obsidian, wird aber nicht automatisch formatiert
```

- Beispiel mit Bindestrich  
* Beispiel mit Stern  
+ Beispiel mit Plus  
• Beispiel mit Punkt (manuell eingefügt, kein echtes Markdown-Symbol)

**Hinweis:**  
Markdown wandelt nur `-`, `*`, `+` automatisch in Listenpunkte um.  
Ein Punkt `•` ist nur ein Unicode-Zeichen und keine „echte“ Liste – eignet sich aber für manuelle Aufzählungen in ästhetischen Layouts.

### 🔸 Geordnete Listen

```md
1. Erster Punkt
2. Zweiter Punkt
   1. Unterpunkt
```

1. Erster Punkt  
2. Zweiter Punkt  
   1. Unterpunkt

### 🔸 Alphabetische Listen (manuell)

Markdown unterstützt keine automatischen Buchstabenlisten, aber du kannst sie manuell schreiben:

```md
a. Erster Punkt
b. Zweiter Punkt
   i. Unterpunkt
```

a. Erster Punkt  
b. Zweiter Punkt  
   i. Unterpunkt

---

## ☑️ Aufgabenlisten

```md
- [ ] Noch offen
- [x] Erledigt
```

- [ ] Noch offen  
- [x] Erledigt

---

## 💬 Zitate

```md
> Einfaches Zitat
>> Verschachteltes Zitat
```

> Einfaches Zitat  
>> Verschachteltes Zitat

---

## 💻 Code

### Inline
```md
`inline code`
```
Beispiel: `print("Hello World")`

### Codeblock
```python
print("Hello World")
```

---

## ⛔ Trennlinien

```md
---
***
___
```

---

## 🔗 Links

```md
[Text](https://example.com)
[[Seitentitel]]
[[Seitentitel#Überschrift]]
[[Seitentitel|Angezeigter Text]]
```

Beispiel: [OpenAI](https://openai.com), [[Home]], [[Projekt#Plan|Projektplan]]

---

## 🖼️ Bilder

```md
![Alt-Text](pfad/zum/bild.png)
![Alt-Text](pfad/zum/bild.png "Titel")
```

---

## 📊 Tabellen

```md
| Spalte 1 | Spalte 2 | Spalte 3 |
|-----------|-----------|-----------|
| A         | B         | C         |

| Links | Mitte | Rechts |
|:------|:-----:|-------:|
| L     | M     | R     |
```

| Spalte 1 | Spalte 2 | Spalte 3 |
|-----------|-----------|-----------|
| A         | B         | C         |

---

## 📘 Callouts (Obsidian)

```md
> [!note]
> Das ist eine Notiz.

> [!warning]
> Das ist eine Warnung.

> [!tip]
> Das ist ein Tipp.

> [!quote]
> „Zitat mit Stil“
```

> [!note]
> Das ist eine Notiz.

> [!warning]
> Das ist eine Warnung.

> [!tip]
> Das ist ein Tipp.

> [!quote]
> „Zitat mit Stil“

---

## 🧩 Fußnoten

```md
Text mit Fußnote[^1].

[^1]: Hier steht der Fußnotentext.
```

Beispiel:  
Fußnoten sind praktisch[^1].

[^1]: Beispiel-Fußnote

---

## 🧱 Inline HTML

```html
<span style="color:red;">Roter Text</span>
```

→ <span style="color:red;">Roter Text</span>

---

## 🕵️ Kommentare

```md
%% Dieser Text ist ein Kommentar %%
```

Wird in der Vorschau **nicht angezeigt**.

---

## 🕒 Obsidian-Hotkeys

*(kein Markdown, aber nützlich)*  
- `Ctrl + D` → aktuelles Datum (`2025-11-02`)  
- `Ctrl + T` → aktuelle Zeit (`00:00`)

---

