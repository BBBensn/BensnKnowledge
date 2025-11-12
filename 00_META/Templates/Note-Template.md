<% "---" %>
title: "<% tp.file.title %>"
created: "<% tp.file.creation_date('YYYY-MM-DD HH:mm') %>"
modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"
<%*
  const modalForm = app.plugins.plugins.modalforms.api;
  const result = await modalForm.openForm("Note-Form");
  tR += result.asFrontmatterString();
-%>
<% "---" %>
# <% tp.file.title %>