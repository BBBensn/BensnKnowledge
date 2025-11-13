<% "---" %>
title: "<% tp.file.title %>"
obsidian_type: note
obsidian_form: Note-Form
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Tutorial-Form");
  tR += result.asFrontmatterString();
-%>
created: "<% tp.file.creation_date('YYYY-MM-DD HH:mm') %>"
modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"
<% "---" %>
# <% tp.file.title %>