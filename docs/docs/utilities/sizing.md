<script setup>
const widthHtml = `<div class="w-25 p-2 mb-2 bg-primary-subtle">Width 25%</div>
<div class="w-50 p-2 mb-2 bg-primary-subtle">Width 50%</div>
<div class="w-75 p-2 mb-2 bg-primary-subtle">Width 75%</div>
<div class="w-100 p-2 mb-2 bg-primary-subtle">Width 100%</div>
<div class="w-auto p-2 bg-primary-subtle d-inline-block">Width auto</div>
`;
const heightHtml = `<div style="height:200px" class="border">
  <div class="h-25 d-inline-block bg-primary-subtle p-2 w-25">Height 25%</div>
  <div class="h-50 d-inline-block bg-primary-subtle p-2 w-25">Height 50%</div>
  <div class="h-75 d-inline-block bg-primary-subtle p-2 w-25">Height 75%</div>
  <div class="h-100 d-inline-block bg-primary-subtle p-2 w-25">Height 100%</div>
  <div class="h-auto d-inline-block bg-primary-subtle p-2 w-25">Height auto</div>
</div>
`;
const maxWidthHtml = `<div class="w-50">
  <div class="mw-100 bg-primary-subtle p-2" style="width:200%">Max-width 100%</div>
</div>
`;
const maxHeightHtml = `<div style="height:100px">
  <div class="mh-100 bg-primary-subtle p-2 w-25" style="height:200px">Max-height 100%</div>
</div>
`;
const viewportHtml = `<div class="vh-100 border p-3" style="max-height:150px;overflow:auto">
  This element has <code>.vh-100</code> (100vh height), constrained here for demonstration.
</div>
`;
const practicalHtml = `<div class="d-flex gap-3">
  <div class="w-25 p-3 bg-secondary-subtle rounded">Sidebar (25%)</div>
  <div class="w-75 p-3 bg-primary-subtle rounded">Main content (75%)</div>
</div>
`;
</script>

# Sizing

Set the width and height of elements with sizing utilities.

## Width

<HtmlPreviewer :code="widthHtml" />

## Height

<HtmlPreviewer :code="heightHtml" />

## Max Width

Use `.mw-100` to constrain an element's maximum width to 100% of its parent.

<HtmlPreviewer :code="maxWidthHtml" />

## Max Height

Use `.mh-100` to constrain an element's maximum height to 100% of its parent.

<HtmlPreviewer :code="maxHeightHtml" />

## Viewport Relative

Use `.vw-100`, `.vh-100`, `.min-vw-100`, and `.min-vh-100` for viewport-relative sizing.

<HtmlPreviewer :code="viewportHtml" />

## Practical Examples

### Sidebar Layout

<HtmlPreviewer :code="practicalHtml" />
