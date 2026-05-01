---
title: article
---

<script setup>
import { ArticleDemo } from "@demos/semantics/elements";
</script>

# &lt;article&gt;

The `<article>` element represents a self-contained composition — such as a blog post, widget, or forum post — that can stand alone and be independently distributed.

It carries semantic meaning that distinguishes it from a generic `<div>`.

## Styling

By default, the `<article>` element has no visual styling. To create a card-like appearance, apply the `.card` class:

```html
<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
```

## Basic Card

<HtmlPreviewer :code="ArticleDemo.basicCard()" />

## Card with Header

<HtmlPreviewer :code="ArticleDemo.cardWithHeader()" />

## Card with Footer

<HtmlPreviewer :code="ArticleDemo.cardWithFooter()" />

## Complete Card

<HtmlPreviewer :code="ArticleDemo.completeCard()" />

## Semantic vs Visual

- Use `<article>` for semantic structure (self-contained content)
- Add `.card` for visual styling (background, shadow, border-radius)
- This separation allows you to use `<article>` without card styling when appropriate
