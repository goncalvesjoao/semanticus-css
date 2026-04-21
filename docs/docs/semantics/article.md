---
title: article
---

<script setup>
const example1Html = `<article>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
`;
const example2Html = `<article>
  <header>
    <h3>Card Title</h3>
  </header>
  <p>Card content.</p>
</article>
`;
const example3Html = `<article>
  <p>Card content.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
const example4Html = `<article>
  <header>
    <hgroup>
      <h3>Card Title</h3>
      <p>Subtitle</p>
    </hgroup>
  </header>
  <p>Card content goes here with some more text.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
</script>

# &lt;article&gt;

The `<article>` element represents a self-contained composition — such as a card, blog post, or widget — that can stand alone and be independently distributed.

It carries semantic meaning that distinguishes it from a generic `<div>`.

## Basic Card

<HtmlPreviewer :code="example1Html" />

## Card with Header

<HtmlPreviewer :code="example2Html" />

## Card with Footer

<HtmlPreviewer :code="example3Html" />

## Complete Card

<HtmlPreviewer :code="example4Html" />
