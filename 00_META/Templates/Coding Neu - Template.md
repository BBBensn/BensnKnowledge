<%*
const title = tp.file.title;
const created = tp.file.creation_date("YYYY-MM-DD HH:mm");
const modified = tp.file.last_modified_date("YYYY-MM-DD HH:mm");

// Default, falls kein Userscript / kein Dialog
let tech = "unspecified";

// nur versuchen, wenn Templater die user-Sektion überhaupt geladen hat
if (tp.user && tp.user.tech_stack) {
  try {
    tech = await tp.user.tech_stack();
  } catch (err) {
    tech = "unspecified";
  }
}

tR += `---\n`;
tR += `title: "${title}"\n`;
tR += `created: "${created}"\n`;
tR += `modified: "${modified}"\n`;
tR += `tags:\n`;
tR += `  - project\n`;
tR += `  - coding\n`;
tR += `  - ai\n`;
tR += `  - chat-gpt\n`;
tR += `  - "${tech}"\n`;
tR += `aliases: []\n`;
tR += `status: draft\n`;
tR += `related:\n`;
tR += `  - [[KnowledgeVault]]\n`;
tR += `---\n\n`;
%>

# <% tp.file.title %>

**Tech-Stack:** <%= tech %>




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
