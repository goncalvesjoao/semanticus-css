---
title: textarea
---

<script setup>
const example1Html = `<textarea
  name="bio"
  placeholder="Write a professional short bio..."
  aria-label="Professional short bio"
></textarea>
`;
const example6Html = `<label for="message">Message</label>
<textarea id="message" rows="4" placeholder="Enter your message"></textarea>
`;
const example7Html = `<textarea rows="3" placeholder="Three rows"></textarea>
<textarea rows="6" placeholder="Six rows"></textarea>
`;
</script>

# &lt;textarea&gt;

The `<textarea>` element is a multi-line plain-text input for free-form entry. Use the `rows` attribute to control default height. Always pair with a `<label>` or `aria-label` to provide an accessible name for screen readers.

## Basic Textarea

<HtmlPreviewer :code="example1Html" />

## With Label

<HtmlPreviewer :code="example6Html" />

## With Rows

<HtmlPreviewer :code="example7Html" />

