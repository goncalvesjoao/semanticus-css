# Overview

The docs are split in 3 layers:

- [Semantic Styling](/docs/semantics/anchor) documents styles driven by HTML elements and attributes.
- [Variants](/docs/variants/anchor) documents the optional class-based alternatives that extend or restyle selected semantic patterns.
- [Utilities](/docs/utilities/layout) documents the atomic helpers for layout, spacing, sizing, typography, color, and effects.

---

**Semanticus CSS** can be used in 2 ways: Either by importing the full framework or by importing only the layers you need.

- **semanticus.css** is the complete framework. It includes all three layers and is ideal for most projects that want a quick start with the full feature set.

- **semanticus-semantics.css** includes only the **Semantic Styling** layer. This is ideal for projects that want to start with semantic HTML and add custom styles on top, without the optional variants or utilities.

- **semanticus-variants.css** includes only the **Variants** layer.

- **semanticus-utilities.css** includes only the **Utilities** layer.



## Accessibility as part of the design

In Semanticus CSS, accessibility is not treated as a separate pass after the interface is already designed.

The semantics docs highlight patterns where accessible HTML naturally produces better styling hooks and clearer UI states. A loading region can be expressed with `aria-busy="true"`. Validation can be expressed with `aria-invalid`. Disabled controls remain native disabled controls. Tooltips use explicit attributes rather than anonymous decorative wrappers.

This keeps the source markup easier to read and helps teams think about accessibility earlier, because the same decisions that improve semantics also unlock built-in styling.

## How the layers work together

The intended order is simple:

1. Start with semantic HTML.
2. Add variants when a component needs an alternative appearance.
3. Add utilities when layout or spacing needs fine-grained control.

This gives you a path from minimal markup to more customized interfaces without abandoning the semantic base.
