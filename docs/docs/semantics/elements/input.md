---
title: input
---

<script setup>
import { InputDemo } from "@demos/semantics/elements";
</script>

# &lt;input&gt;

The `<input>` element accepts user data in many formats defined by its `type` attribute — text, email, password, date, color, and more.

Always pair inputs with a `<label>` or `aria-label` so screen readers can identify the field.

For associating labels with inputs see [&lt;label&gt;](/docs/semantics/label).

For validation states see [[aria-invalid]](/docs/semantics/aria-invalid).

For helper text below inputs see [&lt;small&gt;](/docs/semantics/small).

## Basic Inputs

<HtmlPreviewer :code="InputDemo.basicInputs()" />

## Datetime Input

Datetime inputs come with an icon.

<HtmlPreviewer :code="InputDemo.datetimeInput()" />

## Search Input

`type="search"` comes with a distinctive style.

<HtmlPreviewer :code="InputDemo.searchInput()" />

## Color Input

`type="color"` is also consistent with the other input types.

<HtmlPreviewer :code="InputDemo.colorInput()" />

## File Input

Input type file button has a secondary button style.

<HtmlPreviewer :code="InputDemo.fileInput()" />

## Checkboxes

The native `<input type="checkbox">` with a custom and responsive style.

### Basic Checkbox

<HtmlPreviewer :code="InputDemo.basicCheckbox()" />

### Horizontal Stacking

<HtmlPreviewer :code="InputDemo.horizontalCheckbox()" />


### Single Checkbox

<HtmlPreviewer :code="InputDemo.singleCheckbox()" />

## Radios

The native `<input type="radio">` with a custom and responsive style.

### Basic Radio

<HtmlPreviewer :code="InputDemo.basicRadio()" />

### Horizontal Stacking

<HtmlPreviewer :code="InputDemo.horizontalRadio()" />

## Range

The native `<input type="range">` with a custom and responsive style.

### Basic Range

<HtmlPreviewer :code="InputDemo.basicRange()" />

### With Min and Max

<HtmlPreviewer :code="InputDemo.rangeWithMinMax()" />

### With Step

<HtmlPreviewer :code="InputDemo.rangeWithStep()" />

## Switch

The native `<input type="checkbox">` styled as a switch, using the `role="switch"` for accessibility.

### Basic Switch

<HtmlPreviewer :code="InputDemo.basicSwitch()" />

