# Semanticus CSS

[![npm version](https://img.shields.io/npm/v/@goncalvesjoao/semanticus-css)](https://www.npmjs.com/package/@goncalvesjoao/semanticus-css)
[![license](https://img.shields.io/npm/l/@goncalvesjoao/semanticus-css)](LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@goncalvesjoao/semanticus-css)](https://bundlephobia.com/package/@goncalvesjoao/semanticus-css)

**Semanticus** is a lightweight CSS framework that combines **semantic styling** with the flexibility of **atomic utility classes**, with emphasis on accessibility and modern design patterns.

## 🧠 Philosophy

Inspired by [Pico CSS](https://picocss.com/) for its semantic approach and [Bootstrap Utilities](https://getbootstrap.com/docs/5.3/utilities/api/) for its utility class system. This project aims to offer:

- **Readability** - HTML doesn't need to be cluttered with classes to look beautiful. Clean, semantic markup is all you need.
- **Accessibility** - Built with ARIA patterns in mind. Semantic elements and roles ensure inclusive, accessible interfaces.
- **Flexibility** - Use semantic styles, utility classes, or both — whatever fits the situation. No rigid paradigms.
- **Performance** - Minimal CSS footprint with zero JavaScript dependency. ~22 KB gzipped for lightning-fast loads.
- **Consistency** - Predictable styling across your project. Semantic and utility layers share the same CSS variables.
- **Customizability** - Override CSS variables to create your own themes, or choose from a list of pre-built color palettes and adjustable sizing options.

## 📦 Installation

### Option 1: CDN (quick start)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@goncalvesjoao/semanticus-css@0.1/dist/semanticus.min.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@goncalvesjoao/semanticus-css@0.1/dist/semanticus.palette.blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@goncalvesjoao/semanticus-css@0.1/dist/semanticus.size.slim.css">
```

### Option 2: Install manually

Download the CSS files and include them in your HTML `<head>`:

```html
<link rel="stylesheet" href="/css/semanticus.min.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="/css/semanticus.palette.blue.css">
<link rel="stylesheet" href="/css/semanticus.size.slim.css">
```

### Option 3: NPM

```bash
npm install semanticus-css
```

```js
import 'semanticus-css';

// Or import individual modules
import 'semanticus-css/semantics';
import 'semanticus-css/variants';
import 'semanticus-css/utilities';

// Or add a palette / size on top
import 'semanticus-css/palettes/blue';
import 'semanticus-css/sizes/slim';
```

> **Note:** The `import` syntax requires a bundler that supports CSS imports (e.g., Vite, Webpack, Rollup, or Parcel).

Check out the [Palettes & Sizes](/guide/palettes-sizes) guide for more options.

## 🚀 Usage

Semanticus CSS is built on three principles:

### 1. Semantic Styling

PicoCSS design applied to plain HTML elements without adding any classes. See the [Semantic Styling](/docs/semantics) guide for more details.

```html
<article>
  <h1>Hello World</h1>
  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <button>Click me</button>
</article>
```

### 2. Variant Classes

A minimal set of CSS classes that add style variations to **Semantic Styling**. See the [Variants](/docs/variants) guide for more details.

```html
<button class="ghost">Ghost</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
```

### 3. Atomic Utilities

Bootstrap utility classes adapted to the **Semantic Styling** and **Variant Classes** style sizes, spacing and colors for a consistent design. See the [Utilities](/docs/utilities) guide for more details.

```html
<footer class="py-4 text-center text-bg-contrast-subtle">
  <p class="mb-0">Star us on GitHub!</p>
</footer>
```

## 🛠️ Customization

You can override its variables to create your own themes and styles. For example:

```css
:root {
  --color-primary: #4f46e5;
  --border-radius: 0.75rem;
  --font-family: "Inter", sans-serif;
}
```

Check out the [CSS Variables](/guide/css-variables) guide for more details or the [Theme Builder](/theme-builder) to help you create your own custom styles.

## 🌐 Browser Support

Semanticus CSS targets modern browsers based on the following [Browserslist](https://browsersl.ist/) configuration:

- Last 2 versions of each browser
- Firefox ESR
- No dead browsers

## 👨‍💻 Development

Check out the [Development Guide](docs/guide/development.md) for instructions on setting up the development environment, running tests, and contributing to the project.

## 📄 License

Semanticus CSS is licensed under the [MIT License](LICENSE).

This project incorporates concepts and patterns from [Pico CSS](https://picocss.com/) and [Bootstrap](https://getbootstrap.com/), including Bootstrap's utilities system, both under the MIT License.
See the [NOTICE](NOTICE) file for full attribution and copyright details.

## 🙏 Acknowledgments

Semanticus CSS wouldn't exist without the incredible work of the authors of:

### [Pico CSS](https://picocss.com/)

For showing us the beauty and power of semantic HTML while using accessibility as part of the design.
Very few frameworks have managed to keep so faithful to the semantic motto as PicoCSS is.

### [Bootstrap](https://getbootstrap.com/)

For providing a broad, practical utility system and a well-documented Utility API.
Bootstrap's utility architecture strongly influenced the utility layer in this project.

#### To the maintainers and contributors of these projects: THANK YOU 🙏
