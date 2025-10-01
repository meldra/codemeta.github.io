---
title: "The CodeMeta JSON-LD Representation"
---

CodeMeta uses JSON-LD to represent and translate between software metadata formats.
JSON-LD lead developer Manu Sporny explains how JSON-LD works in this short clip:

{{< youtube Tm3fD89dqRE >}}

## The JSON-LD Context File

[![W3IDCodeMeta v3](https://img.shields.io/badge/W3ID-CodeMeta_v3-blue)](https://w3id.org/codemeta/3.0)

The current CodeMeta context file can be found at[`https://w3id.org/codemeta/3.0`](https://w3id.org/codemeta/3.0).

CodeMeta properties are built on and extend software properties from
<https://schema.org>.
A list of all properties provided by the current CodeMeta `context` file can be
found on the [terms](/terms) page. Here's an example
[codemeta.json file](https://github.com/gem-pasteur/macsyfinder/blob/master/codemeta.json)
for the `gem-pasteur/macsyfinder` project.
