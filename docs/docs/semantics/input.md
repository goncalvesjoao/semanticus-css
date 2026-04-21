---
title: input
---

<script setup>
const example1Html = `<input type="text" name="text" placeholder="Text" aria-label="Text" />
<input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email" />
<input type="number" name="number" placeholder="Number" aria-label="Number" />
<input type="password" name="password" placeholder="Password" aria-label="Password" />
<input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autocomplete="tel" />
<input type="url" name="url" placeholder="Url" aria-label="Url" />
`;
const example2Html = `<input type="date" name="date" aria-label="Date" />
<input type="datetime-local" name="datetime-local" aria-label="Datetime local" />
<input type="month" name="month" aria-label="Month" />
<input type="time" name="time" aria-label="Time" />
`;
const example3Html = `<input type="search" name="search" placeholder="Search" aria-label="Search" />
`;
const example4Html = `<input type="color" value="#ff9500" aria-label="Color picker" />
`;
const example5Html = `<input type="file" />
`;

const checkboxExample1Html = `<fieldset>
  <legend>Language preferences:</legend>
  <label>
    <input type="checkbox" name="english" checked />
    English
  </label>
  <label>
    <input type="checkbox" name="mandarin" />
    Mandarin
  </label>
  <label aria-disabled="true">
    <input type="checkbox" name="dothraki" disabled />
    Dothraki
  </label>
</fieldset>
`;
const checkboxExample2Html = `<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label for="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label for="swahili">Swahili</label>
  <input type="checkbox" id="navi" name="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;
const checkboxExample5Html = `<label>
  <input type="checkbox" name="agree">
  I agree to the terms
</label>
`;

const radioExample1Html = `<fieldset>
  <legend>Language preference:</legend>
  <label>
    <input type="radio" name="language" checked value="english" />
    English
  </label>
  <label>
    <input type="radio" name="language" value="mandarin" />
    Mandarin
  </label>
  <label aria-disabled="true">
    <input type="radio" name="language" value="dothraki" disabled />
    Dothraki
  </label>
</fieldset>
`;
const radioExample2Html = `<fieldset>
  <legend>Second language:</legend>
  <input type="radio" id="hindi" name="second-language" checked value="hindi" />
  <label for="hindi">Hindi</label>
  <input type="radio" id="swahili" name="second-language" value="swahili" />
  <label for="swahili">Swahili</label>
  <input type="radio" id="navi" name="second-language" value="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;

const rangeExample1Html = `<label>
  Brightness
  <input type="range" />
</label>

<label>
  Contrast
  <input type="range" value="40" />
</label>
`;
const rangeExample2Html = `<label>
  Volume
  <input type="range" min="0" max="100" value="50" />
</label>
`;
const rangeExample3Html = `<label>
  Rating (0-10)
  <input type="range" min="0" max="10" step="1" value="5" />
</label>
`;
const switchExample1Html = `<fieldset>
  <label>
    <input name="terms" type="checkbox" role="switch" />
    I agree to the Terms
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
    Receive news and offers
  </label>
</fieldset>
`;
</script>

# &lt;input&gt;

The `<input>` element accepts user data in many formats defined by its `type` attribute — text, email, password, date, color, and more.

Always pair inputs with a `<label>` or `aria-label` so screen readers can identify the field.

For associating labels with inputs see [&lt;label&gt;](/docs/semantics/label).

For validation states see [[aria-invalid]](/docs/semantics/aria-invalid).

For helper text below inputs see [&lt;small&gt;](/docs/semantics/small).

## Basic Inputs

<HtmlPreviewer :code="example1Html" />

## Datetime Input

Datetime inputs come with an icon.

<HtmlPreviewer :code="example2Html" />

## Search Input

`type="search"` comes with a distinctive style.

<HtmlPreviewer :code="example3Html" />

## Color Input

`type="color"` is also consistent with the other input types.

<HtmlPreviewer :code="example4Html" />

## File Input

Input type file button has a secondary button style.

<HtmlPreviewer :code="example5Html" />

## Checkboxes

The native `<input type="checkbox">` with a custom and responsive style.

### Basic Checkbox

<HtmlPreviewer :code="checkboxExample1Html" />

### Horizontal Stacking

<HtmlPreviewer :code="checkboxExample2Html" />


### Single Checkbox

<HtmlPreviewer :code="checkboxExample5Html" />

## Radios

The native `<input type="radio">` with a custom and responsive style.

### Basic Radio

<HtmlPreviewer :code="radioExample1Html" />

### Horizontal Stacking

<HtmlPreviewer :code="radioExample2Html" />

## Range

The native `<input type="range">` with a custom and responsive style.

### Basic Range

<HtmlPreviewer :code="rangeExample1Html" />

### With Min and Max

<HtmlPreviewer :code="rangeExample2Html" />

### With Step

<HtmlPreviewer :code="rangeExample3Html" />

## Switch

The native `<input type="checkbox">` styled as a switch, using the `role="switch"` for accessibility.

### Basic Switch

<HtmlPreviewer :code="switchExample1Html" />

