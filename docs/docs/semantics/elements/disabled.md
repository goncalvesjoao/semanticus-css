---
title: [disabled]
---

<script setup>
const buttonHtml = `<div role="toolbar">
  <button disabled>Disabled</button>
  <button class="secondary" disabled>Disabled</button>
  <button class="contrast" disabled>Disabled</button>
</div>
`;
const inputHtml = `<input type="text" name="text" placeholder="Disabled" aria-label="Disabled input" disabled />
`;
const rangeHtml = `<label>
  Disabled slider
  <input type="range" disabled />
</label>
`;
const selectHtml = `<select name="meal-type" aria-label="Select a meal type..." disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>
`;
const switchHtml = `<fieldset>
  <label>
    <input name="publish" type="checkbox" role="switch" disabled />
    Publish on my profile
  </label>
  <label>
    <input name="change-password" type="checkbox" role="switch" checked disabled />
    Change my password at next login
  </label>
</fieldset>
`;
const textareaHtml = `<textarea name="disabled" disabled>
  Disabled
</textarea>
`;
</script>

# [disabled]

The `disabled` attribute prevents interaction with a form element and removes it from the keyboard tab order, communicated to assistive technologies as unavailable.

## Button

<HtmlPreviewer :code="buttonHtml" />

## Input

<HtmlPreviewer :code="inputHtml" />

### Range

<HtmlPreviewer :code="rangeHtml" />

## Select

<HtmlPreviewer :code="selectHtml" />

## Switch

<HtmlPreviewer :code="switchHtml" />

## Textarea

<HtmlPreviewer :code="textareaHtml" />
