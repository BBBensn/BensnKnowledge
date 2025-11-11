SA<%*
/* --- Metadaten (Templater) --- */
const title    = tp.file.title;
const created  = tp.file.creation_date("YYYY-MM-DD HH:mm");
const modified = tp.file.last_modified_date("YYYY-MM-DD HH:mm");

/* --- Modal Form API --- */
const modalForm = app.plugins.plugins["obsidian-modal-form"].api;

// YAML-Datei öffnen statt GUI-Form
const mf = app?.plugins?.plugins?.["obsidian-modal-form"];
if (!mf?.api) {
  new Notice("Modal Form Plugin nicht aktiv.");
  return;
}
const result = await mf.api.open("00_META/forms/coding.yaml");


// Ergebnis in YAML-Format einfügen
tR += `---\n`;
tR += `title: "${title}"\n`;
tR += `created: "${created}"\n`;
tR += `modified: "${modified}"\n`;
tR += result.asFrontmatterString();   // generiert YAML aus der Form
tR += `---\n`;
%>


# <% tp.file.title %>

## Zielsetzung



---
## Architektur / Struktur



---
## Technologien



---
## Funktionslogik



---
## To-Do / Weiterentwicklung



---
## Dokumentation / Tutorials



---
## Referenzen / Ressourcen



---

## Zielsetzung



---
## Architektur / Struktur



---
## Technologien



---
## Funktionslogik



---
## To-Do / Weiterentwicklung



---
## Dokumentation / Tutorials



---
## Referenzen / Ressourcen

Siehe auch: <% result.get("related") %>
Repo - Link:  <% result.get("repo") %>

---