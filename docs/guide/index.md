<script setup>
const example1Html = `<article>
  <h1>Hello World</h1>
  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <button>Click me</button>
</article>
`;
const example2Html = `<footer class="py-4 text-center text-bg-contrast-subtle">
  <p class="mb-0">Star us on GitHub!</p>
</footer>
`;
const example3Html = `<button class="ghost">Ghost</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
`;
const example4Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="semanticus.min.css">
</head>
<body>
  <header class="container">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
      </ul>

      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="container">
    <hgroup>
      <h1>Welcome to Semanticus CSS</h1>
      <p>A lightweight CSS framework for modern web development.</p>
    </hgroup>
    <button class="secondary">Get Started</button>
  </main>

  <footer class="mt-5 py-4 text-center text-bg-contrast-subtle">
    <p class="mb-0">&copy; 2026 &lt;your brand&gt;. All rights reserved.</p>
  </footer>
</body>
</html>
`;
</script>

# Getting Started

Add **Semanticus CSS** to your project either via **CDN**, **manual download**, or importing from **Node**.

## Install

<InstallGuide />

Looking for alternative color palettes or sizing options? Check out the [Palettes & Sizes](/guide/palettes-sizes) guide.

## Usage

Semanticus CSS is built on three principles:

### 1. Semantic Styling

PicoCSS design applied to plain HTML elements without adding any classes. See the [Semantic Styling](/docs/semantics) guide for more details.

<HtmlPreviewer :code="example1Html" />

### 2. Variant Classes

Minimal set of CSS classes that add variation styles to the semantic elements. See the [Variants](/docs/variants) guide for more details.

<HtmlPreviewer :code="example3Html" />

### 3. Atomic Utilities

Bootstrap utility classes adapted to the **semantic** and **variant** style sizes, spacing and colors for a consistent design. See the [Utilities](/docs/utilities) guide for more details.

<HtmlPreviewer :code="example2Html" />

## LandingPage example

Here's a starter HTML template using semantic styling, its variants, and utilities:

<HtmlPreviewer :code="example4Html" />
