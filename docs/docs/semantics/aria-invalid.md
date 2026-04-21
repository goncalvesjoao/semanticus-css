---
title: [aria-invalid]
---

<script setup>
const inputHtml = `<input type="text" name="valid" value="Valid" aria-invalid="false" />

<input type="text" name="invalid" value="Invalid" aria-invalid="true" />
`;
const inputHelperHtml = `<input type="text" name="valid" value="Valid" aria-invalid="false" aria-describedby="valid-helper" />
<small id="valid-helper">Looks good!</small>

<input type="text" name="invalid" value="Invalid" aria-invalid="true" aria-describedby="invalid-helper" />
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;
const checkboxHtml = `<label>
  <input type="checkbox" name="valid" aria-invalid="false" />
  Valid
</label>

<label>
  <input type="checkbox" name="invalid" aria-invalid="true" />
  Invalid
</label>
`;
const radioHtml = `<fieldset>
  <label>
    <input type="radio" name="validation-states" aria-invalid="false" />
    Valid
  </label>

  <label>
    <input type="radio" name="validation-states" aria-invalid="true" />
    Invalid
  </label>
</fieldset>
`;
const selectHtml = `<select aria-invalid="false">
  <option selected disabled value="">
    Select your favorite pizza topping...
  </option>
  <option>Pepperoni</option>
  <option>Mushrooms</option>
  <option>Onions</option>
  <option>Green Peppers</option>
  <option>Olives</option>
</select>
<small>Great choice!</small>

<select required aria-invalid="true">
  <option selected disabled value="">
    Select your favorite pizza topping...
  </option>
  <option>Pepperoni</option>
  <option>Mushrooms</option>
  <option>Onions</option>
  <option>Green Peppers</option>
  <option>Olives</option>
</select>
<small>
  Please select your favorite pizza topping!
</small>
`;
const switchHtml = `<fieldset>
  <label>
    <input name="2fa" type="checkbox" role="switch" aria-invalid="false" />
    Enable two-factor authentication
  </label>
  <label>
    <input name="subscription" type="checkbox" role="switch" aria-invalid="true" />
    Automatic subscription renewal
  </label>
</fieldset>
`;
const textareaHtml = `<textarea name="valid" aria-invalid="false">
  Valid
</textarea>

<textarea name="invalid" aria-invalid="true">
  Invalid
</textarea>
`;
const textareaHelperHtml = `<textarea
  name="valid"
  aria-invalid="false"
  aria-describedby="valid-helper"
>
  Valid
</textarea>
<small id="valid-helper">Looks good!</small>

<textarea
  name="invalid"
  aria-invalid="true"
  aria-describedby="invalid-helper"
>
  Invalid
</textarea>
<small id="invalid-helper">
  Please provide a valid value!
</small>
`;
</script>

# [aria-invalid="true|false"]

The `aria-invalid` attribute communicates the validation state of a form control to assistive technologies.

Set it to `"true"` for an invalid field and `"false"` for a valid one.

Pair it with a helper message via `aria-describedby` to explain the error.

## Input

<HtmlPreviewer :code="inputHtml" />

Helper texts defined with `<small>` below the form element inherit the validation state color.

<HtmlPreviewer :code="inputHelperHtml" />

## Checkbox

<HtmlPreviewer :code="checkboxHtml" />

## Radio

<HtmlPreviewer :code="radioHtml" />

## Select

<HtmlPreviewer :code="selectHtml" />

## Switch

<HtmlPreviewer :code="switchHtml" />

## Textarea

<HtmlPreviewer :code="textareaHtml" />

Helper texts defined with `<small>` below the textarea inherit the validation state color.

<HtmlPreviewer :code="textareaHelperHtml" />

