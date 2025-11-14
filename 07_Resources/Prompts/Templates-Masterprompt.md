---
topic: Obsidian Templates Masterprompt
target_model: chat_gpt
purpose: Masterprompt um weitere einheitliche Templates zu erstellen
ai_involvement: human
tags:
  - chat-gpt
  - obsidian
  - templates
summary: Ein Masterprompt um weitere einheitliche Templates für den  BensnKnowledgeVault zu erstellen.
obsidian_type: prompt
obsidian_form: Prompt-Form
related:
  - "[[../../00_META/Templates/Catalog-Template|Catalog-Template]]"
  - "[[../../00_META/Templates/Daily-Log-Template|Daily-Log-Template]]"
  - "[[../../00_META/Templates/Idea-Template|Idea-Template]]"
  - "[[../../00_META/Templates/Mental-Log-Template|Mental-Log-Template]]"
  - "[[../../00_META/Templates/Moodboard-Template|Moodboard-Template]]"
  - "[[../../00_META/Templates/Note-Template|Note-Template]]"
  - "[[../../00_META/Templates/Project-Log-Template|Project-Log-Template]]"
  - "[[../../00_META/Templates/Project-Template|Project-Template]]"
  - "[[../../00_META/Templates/Prompt-Template|Prompt-Template]]"
  - "[[../../00_META/Templates/Research-Template|Research-Template]]"
  - "[[../../00_META/Templates/Shopping-Template|Shopping-Template]]"
  - "[[../../00_META/Templates/ToDo-Template|ToDo-Template]]"
  - "[[../../00_META/Templates/Tutorial-Template|Tutorial-Template]]"
  - "[[Note-Masterprompt]]"
  - "[[Obsidian-Restart-Prompt]]"
date created: 2025-11-14 00:15:09
date modified: 2025-11-14 04:40:17
---

# Templates-Masterprompt


## Übersicht

Ein Masterprompt und weitere einheitliche Templates für den BensnKnowledgeVault zu erstellen.
  
Folgende Dinge sind global fixiert:
- Übersicht
- Hauptinhalt (abhängig vom Template)
- Nächste Schritte
- Links & Referenzen
- Weitere Notizen

Weitere Regeln:
- Einheitliche Überschriften + Platzhaltertexte
- Interne Links werden automatisch gesammelt

## Prompt-Ziel

Masterprompt um einheitliche Obsidian Templates zu erstellen

## Zielmodell

GPT‑5.1

## Prompt-Inhalt

```


erstelle mir nun das nächste Template **"Prompt-Template"** . Erstelle dafür ein Canvas, halte dich Strikt an diesen Masterprompt und die angehängten bisherigen Templates.
hier der Head aus dem modal Plugin:
<% "---" %>
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Prompt-Form");
  tR += result.asFrontmatterString();
-%>
<% "---" %>
passe ihn noch fertig an.
hier der masterprompt:

# **MASTERPROMPT: Obsidian Template-Erstellung (Strenge Regeln für ChatGPT)**

# **MASTERPROMPT: Obsidian Template-Erstellung (Strenge Regeln für ChatGPT)**

Du erstellst für mich Obsidian-Templates, die mit **Templater**, **Modal Forms**, **Dataview** und meiner eigenen Ordnerlogik funktionieren.  
Du hältst dich an ALLE folgenden Regeln ohne Abweichung.  
Wenn du eine Vorlage produzierst, MUSS sie diesen Standards entsprechen.  
Wenn etwas unklar ist, frag nach, bevor du irgendetwas „errätst“.

---

# **1. Header-Regeln (STRICT)**

Der Header folgt IMMER folgendem Schema:


---
<%*
const modalForm = app.plugins.plugins.modalforms.api;
const result = await modalForm.openForm("FORM-NAME");
tR += result.asFrontmatterString();
-%>
obsidian_type: TYPE
obsidian_form: FORM-NAME
---
# <% tp.file.title %>




**Wichtig:**

- **KEINE einzige Zeile verändern außer:**
  - `"FORM-NAME"` → tatsächlicher Modal-Form Name  
  - `obsidian_type:` → kurzer, einheitlicher Typ: `note`, `idea`, `project`, …  
  - `obsidian_form:` → exakt der Formularname  
- **Zwischen `---` und `#` KEINE Leerzeile.**  
- **Nach der H1 ÜBERSCHRIFT (Titel) folgen GENAU 2 Leerzeilen.**

---

# **2. Abstände / Leerzeilen (STRICT)**

- Nach H1 → **2 Leerzeilen**  
- Nach jeder H2/H3/H4 → **1 Leerzeile**  
- Keine zusätzlichen Leerzeilen innerhalb eines Abschnitts  
- Keine spontanen Layout-Experimente  

---

# **3. Platzhaltertexte (GLOBAL, FIX)**

### **Übersicht**
> Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

### **Weitere Notizen**
> Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.

### **Interne Links / Externe Links**
- Keine Bullets darunter.

---

# **4. Trennlinien (STRICT)**

### **Im Template JA**
- Nur bei mehreren Kategorien innerhalb des gleichen Templates  
- Format:
  
  ---
  
- Zwischen Kategorien **immer doppelte Trennlinie**

### **Im fertigen Dokument NEIN**
- Alle Trennlinien werden später manuell entfernt  

---

# **5. Projekttyp-Spezifische Blöcke (STRICT)**

Für Project-artige Templates:

- **ALLE Kategorien stehen untereinander**
- **Keine** dynamischen IF-Blocks, keine Templater-Logik, kein DataviewJS  
- Jede Kategorie durch **doppelte Trennlinie** getrennt  
- Inhalt vollständig statisch – nicht abhängig von Feldern oder Bedingungen  
- Du machst ALLES sichtbar, ich lösche manuell  

---

# **6. Überschriften-Struktur (STRICT)**

### **Globale Struktur**
- `#` → Titel (nur 1×; Ausnahme: Kategorien → dort auch H1)  
- `##` → Hauptsektionen  
- `###` → Untersektionen  
- `####` → Sub-Ebenen  

### **Kategorie-Struktur (falls Template mehrere Varianten enthält)**

Pro Kategorie:

- `#` → Kategorie-Titel  
- `##` → Übersicht / Ziele / Struktur / Details / Links / Weitere Notizen  
- `###` → Untersektionen  
- `####` → Sub-Ebenen  

Regeln:
- Am Ende existiert nur **1 H1** (ich lösche die Kategorie-H1 nach Nutzung)  
- Kein übermäßiges Nesting  

---

# **7. Konsistenz über ALLE Templates hinweg**

- Reihenfolge IMMER identisch:

  1. Übersicht  
  2. Hauptinhalt  
  3. Nächste Schritte (falls sinnvoll)  
  4. Links & Referenzen  
  5. Weitere Notizen  

- Platzhaltertexte identisch  
- Überschriften identisch  
- Abstände identisch  

---

# **8. Keine KI-Erfindungen**

Ich benutze NUR:

- Vorgaben aus diesem Masterprompt  
- Bestehende Templates als Referenz  
- Keine neuen Kategorien  
- Keine eigenen Ideen  
- Keine Interpretation ohne Rückfrage  

---

# **9. Wenn etwas unklar ist → nachfragen**

Pflicht:
- Rückfrage bevor du strukturverändernde Entscheidungen triffst  
- Rückfrage bei unklaren Begriffen  
- Rückfrage bei fehlenden Headern/Forms  
- Keine Annahmen, nie  

---

# **10. Ausgaben in Canvas**

- Nur wenn ich es ausdrücklich verlange  
- Canvas enthält exakt **ein** Dokument  
- Kein unnötiger Ballast  
- Immer final nutzbar  

---

# **11. Fokus: Präzision, Konsistenz, Einfachheit**

- Minimalistisch  
- Wartbar  
- Keine Magie  
- Keine Spielereien  
- Keine versteckte Logik  
- Copy/Paste sicher  

---



```

## Kontext & Hinweise

Wenns Sinn macht darf von der Strikte Struktur abgewichen werden (z.B [[../../00_META/Templates/Shopping-Template|Shopping-Template]], [[../../00_META/Templates/ToDo-Template|ToDo-Template]] )

## Nächste Schritte

Main Templates sind erstellt, sollten weitere kommen kann der Masterprompt jederzeit wieder genutzt werden.

## Links & Referenzen

### Interne Links

```dataview
LIST from outgoing([[]])
```

### Externe Links

- 

## Weitere Notizen

Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.