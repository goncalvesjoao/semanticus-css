<script setup>
const positionValuesHtml = `<div class="position-relative border" style="height:200px">
  <div class="position-absolute top-0 start-0 bg-primary p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-0 end-0 bg-secondary p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-50 start-50 bg-success p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute bottom-0 start-0 bg-danger p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute bottom-0 end-0 bg-warning p-2 rounded" style="width:40px;height:40px"></div>
</div>
`;
const centerElementsHtml = `<div class="position-relative border" style="height:200px">
  <div class="position-absolute top-0 start-50 translate-middle-x bg-primary p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y bg-success p-2 rounded" style="width:40px;height:40px"></div>
  <div class="position-absolute top-50 start-50 translate-middle bg-danger p-2 rounded" style="width:40px;height:40px"></div>
</div>
`;
const fixedStickyHtml = `<div class="position-relative border" style="height:200px;overflow-y:auto">
  <div class="sticky-top bg-primary p-2">
    <strong style="color:white">Sticky top bar</strong>
  </div>
  <div class="p-3">
    <p>Scroll this container to see the sticky behavior.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
    <p>Excepteur sint occaecat cupidatat non proident.</p>
  </div>
</div>
`;
const floatHtml = `<div class="clearfix border p-2 mb-3">
  <div class="float-start p-2 border">Float start</div>
  <div class="float-end p-2 border">Float end</div>
  <p>This text wraps around the floated elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div class="float-none p-2 border">Float none</div>
`;
const floatResponsiveHtml = `<div class="clearfix border p-2">
  <div class="float-sm-end p-2 border mb-2">Float end on sm and wider</div>
  <div class="float-md-end p-2 border mb-2">Float end on md and wider</div>
  <div class="float-lg-end p-2 border">Float end on lg and wider</div>
</div>
`;
const zIndexHtml = `<div class="position-relative" style="height:160px">
  <div class="z-3 position-absolute p-3 rounded bg-primary" style="top:0;left:0;width:120px">z-3</div>
  <div class="z-2 position-absolute p-3 rounded bg-success" style="top:20px;left:40px;width:120px">z-2</div>
  <div class="z-1 position-absolute p-3 rounded bg-warning" style="top:40px;left:80px;width:120px">z-1</div>
  <div class="z-0 position-absolute p-3 rounded bg-danger" style="top:60px;left:120px;width:120px">z-0</div>
  <div class="z-n1 position-absolute p-3 rounded bg-secondary" style="top:80px;left:160px;width:120px">z-n1</div>
</div>
`;
const practicalHtml = `<div class="position-relative d-inline-block">
  <button>
    Notifications
  </button>
  <span class="position-absolute top-0 start-100 translate-middle rounded-pill bg-danger px-2" style="font-size:0.75rem;color:white">
    9+
  </span>
</div>
`;
</script>

# Positioning

Configure the position of elements with position, float, and z-index utilities.

## Position

Use `.position-static`, `.position-relative`, `.position-absolute`, `.position-fixed`, and `.position-sticky`.

### Arrange Elements

Combine position utilities with edge placement: `.top-{0|50|100}`, `.bottom-{0|50|100}`, `.start-{0|50|100}`, `.end-{0|50|100}`.

<HtmlPreviewer :code="positionValuesHtml" />

### Center Elements

Use `.translate-middle`, `.translate-middle-x`, or `.translate-middle-y` to center positioned elements.

<HtmlPreviewer :code="centerElementsHtml" />

### Fixed and Sticky

Use `.fixed-top`, `.fixed-bottom`, `.sticky-top`, or `.sticky-bottom` for fixed and sticky positioning. Sticky variants also support responsive breakpoints.

<HtmlPreviewer :code="fixedStickyHtml" />

## Float

Toggle floats on any element with responsive float utilities.

<HtmlPreviewer :code="floatHtml" />

### Responsive Floats

<HtmlPreviewer :code="floatResponsiveHtml" />

## Z-Index

Control the stack order of elements. Values range from `z-n1` (-1) through `z-3`.

<HtmlPreviewer :code="zIndexHtml" />

## Practical Examples

### Notification Badge

<HtmlPreviewer :code="practicalHtml" />
