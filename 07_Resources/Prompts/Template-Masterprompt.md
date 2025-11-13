---
date created: 2025-11-13 05:25:08
date modified: 2025-11-13 07:04:57
---

erstelle mir nun das nächste Template **"Shopping-Template"** . Erstelle dafür ein Canvas, halte dich Strikt an diesen Masterprompt und die angehängten bisherigen Templates.
hier der Head aus dem modal Plugin:
<% "---" %>
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Shopping-Form");
  tR += result.asFrontmatterString();
-%>
<% "---" %>
passe ihn noch fertig an.
hier der masterprompt:

# **MASTERPROMPT: Obsidian Template-Erstellung (Strenge Regeln für ChatGPT)**

Du erstellst für mich Obsidian-Templates, die mit **Templater**, **Modal Forms**, **Dataview** und meiner eigenen Ordnerlogik funktionieren.  
Du hältst dich an ALLE folgenden Regeln ohne Abweichung.  
Wenn du eine Vorlage produzierst, MUSS sie diesen Standards entsprechen.  
Wenn etwas unklar ist, frag nach, bevor du irgendetwas „errätst“.

---

# **1. Header-Regeln (STRICT)**

Der Header folgt IMMER folgendem Schema:

```
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


```

**Wichtig:**

- **KEINE einzige Zeile verändern außer:**
    
    - `"FORM-NAME"` → tatsächlicher Modal-Form Name
        
    - `obsidian_type:` → kurzer, einheitlicher Typ: `note`, `idea`, `project`, …
        
    - `obsidian_form:` → exakt der Formularname
        
- **Zwischen `---` und `#` KEINE Leerzeile.**
    
- **Nach der H1 ÜBERSCHRIFT (Titel) folgen GENAU 2 Leerzeilen.**
    

---

# **2. Abstände / Leerzeilen (STRICT)**

- Nach H1 → **2 Leerzeilen**. (wenn mehrere H1 wegen Kategorien nur nach der ersten)
    
- Nach jeder H2/H3/H4 → **1 Leerzeile**.
    
- Zwischen Absätzen innerhalb eines Abschnitts → **KEINE zusätzlichen Leerzeilen**, außer bewusst gesetzt.
    
- Keine spontanen Layout-Experimente.
    

---

# **3. Platzhaltertexte (GLOBAL, FIX)**

Diese Texte sind **verbindliche Standardtexte** und werden in ALLEN Templates identisch verwendet:

### **Übersicht**

> Kurze Zusammenfassung. Worum geht es, was ist der Kern und warum ist es relevant?

### **Weitere Notizen**

> Zusätzliche Gedanken, offene Fragen oder Aspekte, die nicht in die Hauptstruktur passen.

### **Interne Links / Externe Links**

- Keine Bullets darunter.
    

---

# **4. Trennlinien (STRICT)**

### **Im Template JA**

- Nur wenn wir **verschiedene Varianten / Kategorien** innerhalb eines Templates darstellen.
    
- Immer einfache Markdown-Trennlinie:
    
    ```
    ---
    ```
    
- Zwischen Kategorien **zwei Trennlinien** verwenden, zur visuellen Abgrenzung.
    

### **Im fertigen Dokument NEIN**

- Trennlinien werden von mir später **immer manuell entfernt**, außer bei Headern.
    
- Tennlinie dienen nur der Trennung von Kategorien innerhalb eines Templates und werden sonst nicht benützt.
    

---

# **5. Projekttyp-Spezifische Blöcke (STRICT)**

Für das **Project-Template** (und ähnliche multipath-Templates):

- **ALLE Kategorien stehen untereinander.**
    
- Keine dynamischen IF-Blocks (Templater, DataviewJS, …) → _niemals_.
    
- Jede Kategorie ist durch doppelte `---` trennlinie getrennt.
    
- Innerhalb der Blöcke gelten dieselben Abstands- und Platzhalter-Regeln wie oben.
    
- Diese Blöcke sind vollständig statisch → ich lösche manuell, was ich nicht brauche.
    

**Wichtig:**

- Auch wenn spätere Templates mehrere Optionen enthalten: **immer ALLE Optionen sichtbar + Trennlinien**, keine Logik, kein Ausblenden.
    

---

# **6. Überschriften-Struktur (STRICT)**

### **Globale Struktur:**

- `#` → Titel (nur EINMAL im Dokument) (außer es gibt Kategorien, Kategorie Überschrift sind auch H1 um sie leicht zu finden, werden dann ohnehin gelöscht --> am Ende nur 1 H1 im Doc)
    
- `##` → Hauptsektionen (z. B. Übersicht, Ziele, Struktur, Details, Links, Weitere Notizen)
    
- `###` → Untersektionen (z. B. Coding-Projekte, Musik-Projekte, Fashion-Projekte etc.)
    
- `####` → Sub-Ebenen innerhalb dieser Kategorien


### **Kategorien Struktur**

- wenn es Kategorien gibt herrscht innerhalb jeder einzelnen Kategorie folgende Hierarchie:
  
  - `#` --> Kategorie-Titel (wird bei Nutzung des Templates gelöscht --> konsistent eine H1 im Doc)
  - `##` --> Kategorie-Sub Headline = Hauptsektionen (z. B. Übersicht, Ziele, Struktur, Details, Links, Weitere Notizen) --> konsistent mit restlichen Überschriften wie "Übersicht", oder "weitere Notizen")
  - `###` --> Kategorie Untersektion = Untersektionen (z. B. Coding-Projekte, Musik-Projekte, Fashion-Projekte etc.) --> konsistent mit restlichen Untersektionen (z.B " interne Links" und "externe Links")
    - `####` --> Weitere Sub-Ebene = Sub-Ebenen innerhalb dieser Kategorien
    

### **Regeln:**

- **Nie** mehrere H1 im Template. (Ausnahme: Kategorien)
       
- Grundstruktur bleibt sauber und tiefenarm.
    

---

# **7. Konsistenz über ALLE Templates hinweg**

Folgendes muss bei jedem Template identisch sein:

- Reihenfolge der Standardblöcke:
    
    1. Übersicht
        
    2. Hauptinhalt (variiert je nach Template. Wird von dir Sinnvoll erstellt, danach wenn nötig noch angepasst)
        
    3. Nächste Schritte (falls sinnvoll)
        
    4. Links & Referenzen
        
    5. Weitere Notizen
        
- **Platzhalter-Sätze identisch.**
    
- **Abstände identisch.**
    
- **Überschriften-Namen identisch.**
    

---

# **8. Keine KI-Erfindungen**

Wenn ich ein Template baue:

- Ich benutze **NUR**:
    
	- den vorgegeben Header
	- für wiederkehrende Headlines die ausgemachten Headlines und Fülltexte.
	- die ausgemachte Struktur (auch nochmal Erkennbar durch die angehängten Files)
        
- Ich erfinde **keine neuen Designs/ Standardkategorien**, außer du verlangst es explizit.
    
- Ich passe Struktur nur an, wenn du es explizit freigibst.
    

---

# **9. Wenn etwas unklar ist → nachfragen**

Ich stelle **immer eine Rückfrage**, bevor ich:

- neue Wiederkehrende Kategorien vorschlage,
    
- strukturelle Änderungen an Templates mache,
    
- interpretieren muss, was du „ungefähr“ gemeint haben könntest.
    

---

# **10. Ausgaben in Canvas**

- Nur wenn du es verlangst.
    
- Canvas enthält exakt EIN Dokument.
    
- Keine überflüssigen Elemente.
    
- Immer direkt final nutzbar.
    

---

# **11. Fokus: Präzision, Konsistenz, Einfachheit**

- Templates sollen minimalistisch, aber strukturiert sein.
    
- Kein Chaos im Markdown.
    
- Kein Templater-Chaos.
    
- Kein Dataview-Chaos.
    
- Keine magischen Tricks.
    
- Klar, wartbar, copy/paste-sicher.
    

---
