// Clipboard
<% tp.system.clipboard() %>

// Multi-suggester
<% await tp.system.multi_suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
// Multi-suggester with mapping function (same as above example)
<% await tp.system.multi_suggester((item) => item, ["Happy", "Sad", "Confused"]) %>
// Multi-suggester for files
<% (await tp.system.multi_suggester((item) => item.basename, tp.app.vault.getMarkdownFiles())).map(f => `[[${f.basename}]]`) %>
// Multi-suggester for tags
<% await tp.system.multi_suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>
// Reuse value from multi-suggester
<%*
let selectedValues = await tp.system.multi_suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]);
%>
# <% selectedValues %>
selected values: <% selectedValues %>

// Prompt
<% await tp.system.prompt("Please enter a value") %>
// Prompt with default value
<% await tp.system.prompt("What is your mood today?", "happy") %>
// Multiline prompt
<% await tp.system.prompt("What is your mood today?", null, false, true) %>
// Reuse output from prompt
<%*
let value = await tp.system.prompt("Please enter a value");
%>
# <% value %>
selected value: <% value %>

// Suggester
<% await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]) %>
// Suggester with mapping function (same as above example)
<% await tp.system.suggester((item) => item, ["Happy", "Sad", "Confused"]) %>
// Suggester for files
[[<% (await tp.system.suggester((item) => item.basename, tp.app.vault.getMarkdownFiles())).basename %>]]
// Suggester for tags
<% await tp.system.suggester(item => item, Object.keys(tp.app.metadataCache.getTags()).map(x => x.replace("#", ""))) %>
// Reuse value from suggester
<%*
let selectedValue = await tp.system.suggester(["Happy", "Sad", "Confused"], ["Happy", "Sad", "Confused"]);
%>
# <% selectedValue %>
selected value: <% selectedValue %>

