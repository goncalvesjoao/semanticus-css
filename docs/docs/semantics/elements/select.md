---
title: select
---

<script setup>
const example1Html = `<select name="favorite-cuisine" aria-label="Select your favorite cuisine..." required>
  <option selected disabled value="">
    Select your favorite cuisine...
  </option>
  <option>Italian</option>
  <option>Japanese</option>
  <option>Indian</option>
  <option>Thai</option>
  <option>French</option>
</select>
`;
const example2Html = `<select aria-label="Select your favorite snacks..." multiple size="6">
  <option disabled>
    Select your favorite snacks...
  </option>
  <option>Cheese</option>
  <option selected>Fruits</option>
  <option selected>Nuts</option>
  <option>Chocolate</option>
  <option>Crackers</option>
</select>
`;
const example5Html = `<select>
  <optgroup label="North America">
    <option>United States</option>
    <option>Canada</option>
  </optgroup>
  <optgroup label="Europe">
    <option>United Kingdom</option>
    <option>France</option>
  </optgroup>
</select>
`;
const example6Html = `<details>
  <summary aria-haspopup="menu">Select your favorite French dessert...</summary>
  <ul role="menu">
    <li><label><input type="radio" name="french-dessert" value="Crème brûlée"/>Crème brûlée</label></li>
    <li><label><input type="radio" name="french-dessert" value="Macarons"/>Macarons</label></li>
    <li><label><input type="radio" name="french-dessert" value="Tarte tatin"/>Tarte tatin</label></li>
    <li><label><input type="radio" name="french-dessert" value="Éclair"/>Éclair</label></li>
  </ul>
</details>
`;
</script>

# &lt;select&gt;

The `<select>` element creates a dropdown list of `<option>` items. Use the `multiple` attribute to allow multi-selection and `size` to show multiple rows. Always pair with a `<label>` to provide an accessible name.

## Basic Select

<HtmlPreviewer :code="example1Html" />

## Select Multiple

<HtmlPreviewer :code="example2Html" />

## With Optgroup

<HtmlPreviewer :code="example5Html" />

## Dropdown

The dropdown component allows you to build a custom select with the same style as the native select.
See [Dropdown](/variants/components/dropdown).

<HtmlPreviewer :code="example6Html" />

