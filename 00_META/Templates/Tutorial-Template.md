---
date created: Tuesday, November 11th 2025, 10:26:28 pm
date modified: Thursday, November 13th 2025, 6:26:45 am
---
<% "---" %>
title: "<% tp.file.title %>"
created: "<% tp.file.creation_date('YYYY-MM-DD HH:mm') %>"
modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Tutorial-Form");
  tR += result.asFrontmatterString();
-%>

<% "---" %>
# <% tp.file.title %>



## Ziel und Kontext



---
## Voraussetzungen



---
## Schritte



### Schritt 1 – {{schritt_titel_1}}



### Schritt 2 – {{schritt_titel_2}}



### Schritt 3 – {{schritt_titel_3}}



---
## Hinweise / Troubleshooting



---
## Weiterführende Ressourcen



---
## Referenzen / Links
