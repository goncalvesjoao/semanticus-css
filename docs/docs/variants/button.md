<script setup>
const example1Html = `<div role="toolbar">
  <button class="secondary">Secondary</button>
  <button class="contrast">Contrast</button>
</div>
`;
const example2Html = `<div role="toolbar">
  <button class="ghost">Primary</button>
  <button class="ghost secondary">Secondary</button>
  <button class="ghost contrast">Contrast</button>
</div>
`;
</script>

# Button Variants

## Color Variants

Buttons come with `.secondary` and `.contrast` styles.

<HtmlPreviewer :code="example1Html" />

## Ghost Variants

They also come with a classic ghost (outline) style.

<HtmlPreviewer :code="example2Html" />
