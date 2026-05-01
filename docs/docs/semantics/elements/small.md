---
title: small
---

<script setup>
import { SmallDemo } from "@demos/semantics/elements";
</script>

# &lt;small&gt;

`<small>` below form elements is muted and acts as helper text.

Use `aria-describedby` to associate it with the input.

## Helper Text

<HtmlPreviewer :code="SmallDemo.helperText()" />
