<% "---" %>

title: "<% tp.file.title %>"

<%*

const modalForm = app.plugins.plugins.modalforms.api;

const result = await modalForm.openForm("example-form");

tR += result.asFrontmatterString();

-%>


modified: "<% tp.file.last_modified_date('YYYY-MM-DD HH:mm') %>"

<% "---" %>

# <% tp.file.title %>