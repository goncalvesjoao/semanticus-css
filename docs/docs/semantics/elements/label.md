---
title: label
---

<script setup>
import { LabelDemo } from "@demos/semantics/elements";
</script>

# &lt;label&gt;

Labels associate text descriptions with form controls.

`<input>` can be nested inside a `<label>` or associated externally using `for`/`id`.

## Input inside Label

Wrapping an input inside a label implicitly associates them.

<HtmlPreviewer :code="LabelDemo.inputInside()" />

## Input outside Label

Use `for` on the label and a matching `id` on the input to associate them explicitly.

<HtmlPreviewer :code="LabelDemo.inputOutside()" />

For helper text using `<small>`, see [&lt;small&gt;](/docs/semantics/small).
