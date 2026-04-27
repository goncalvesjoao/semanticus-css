<script setup>
const directionHtml = `<div class="d-flex flex-row mb-3 border p-2">
  <div class="p-2 border">Flex item 1</div>
  <div class="p-2 border">Flex item 2</div>
  <div class="p-2 border">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse mb-3 border p-2">
  <div class="p-2 border">Flex item 1</div>
  <div class="p-2 border">Flex item 2</div>
  <div class="p-2 border">Flex item 3</div>
</div>
<div class="d-flex flex-column mb-3 border p-2">
  <div class="p-2 border">Flex item 1</div>
  <div class="p-2 border">Flex item 2</div>
  <div class="p-2 border">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse border p-2">
  <div class="p-2 border">Flex item 1</div>
  <div class="p-2 border">Flex item 2</div>
  <div class="p-2 border">Flex item 3</div>
</div>
`;
const justifyContentHtml = `<div class="d-flex justify-content-start mb-2 border p-2">
  <div class="p-2 border">Start</div>
</div>
<div class="d-flex justify-content-end mb-2 border p-2">
  <div class="p-2 border">End</div>
</div>
<div class="d-flex justify-content-center mb-2 border p-2">
  <div class="p-2 border">Center</div>
</div>
<div class="d-flex justify-content-between mb-2 border p-2">
  <div class="p-2 border">Between</div>
  <div class="p-2 border">Between</div>
</div>
<div class="d-flex justify-content-around mb-2 border p-2">
  <div class="p-2 border">Around</div>
  <div class="p-2 border">Around</div>
</div>
<div class="d-flex justify-content-evenly border p-2">
  <div class="p-2 border">Evenly</div>
  <div class="p-2 border">Evenly</div>
</div>
`;
const alignItemsHtml = `<div class="d-flex align-items-start mb-2 border" style="height:80px">
  <div class="p-2 border">Start</div>
</div>
<div class="d-flex align-items-center mb-2 border" style="height:80px">
  <div class="p-2 border">Center</div>
</div>
<div class="d-flex align-items-end mb-2 border" style="height:80px">
  <div class="p-2 border">End</div>
</div>
<div class="d-flex align-items-stretch border" style="height:80px">
  <div class="p-2 border">Stretch</div>
</div>
`;
const alignSelfHtml = `<div class="d-flex border" style="height:100px">
  <div class="align-self-start p-2 border">Start</div>
  <div class="align-self-center p-2 border">Center</div>
  <div class="align-self-end p-2 border">End</div>
  <div class="align-self-stretch p-2 border">Stretch</div>
</div>
`;
const flexFillHtml = `<div class="d-flex">
  <div class="p-2 flex-fill border">Flex item with a lot of content</div>
  <div class="p-2 flex-fill border">Flex item</div>
  <div class="p-2 flex-fill border">Flex item</div>
</div>
`;
const growShrinkHtml = `<div class="d-flex mb-3">
  <div class="p-2 flex-grow-1 border">Flex grow 1 (fills space)</div>
  <div class="p-2 border">Flex item</div>
  <div class="p-2 border">Third item</div>
</div>
<div class="d-flex">
  <div class="p-2 w-100 border">Wide item</div>
  <div class="p-2 flex-shrink-1 border">Shrink</div>
</div>
`;
const autoMarginsHtml = `<div class="d-flex mb-3 border p-2">
  <div class="p-2 border">Item</div>
  <div class="p-2 border">Item</div>
  <div class="p-2 border">Item</div>
</div>
<div class="d-flex mb-3 border p-2">
  <div class="me-auto p-2 border">Item (me-auto)</div>
  <div class="p-2 border">Item</div>
  <div class="p-2 border">Item</div>
</div>
<div class="d-flex border p-2">
  <div class="p-2 border">Item</div>
  <div class="p-2 border">Item</div>
  <div class="ms-auto p-2 border">Item (ms-auto)</div>
</div>
`;
const wrapHtml = `<div class="d-flex flex-nowrap border p-2 mb-3 w-50">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
  <div class="p-2 border">Item 4</div>
  <div class="p-2 border">Item 5</div>
</div>
<div class="d-flex flex-wrap border p-2 mb-3">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
  <div class="p-2 border">Item 4</div>
  <div class="p-2 border">Item 5</div>
</div>
<div class="d-flex flex-wrap-reverse border p-2">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
  <div class="p-2 border">Item 4</div>
  <div class="p-2 border">Item 5</div>
</div>
`;
const orderHtml = `<div class="d-flex flex-nowrap">
  <div class="order-3 p-2 border">First in source (order-3)</div>
  <div class="order-2 p-2 border">Second in source (order-2)</div>
  <div class="order-1 p-2 border">Third in source (order-1)</div>
</div>
`;
const stacksHtml = `<div class="hstack gap-3 mb-3">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
</div>
<div class="vstack gap-3">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
</div>
`;
const flowHtml = `<div class="flow-h gap-3 mb-3 border">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
</div>

<hr>

<div class="flow-v gap-3 border" style="height: 200px">
  <div class="p-2 border">Item 1</div>
  <div class="p-2 border">Item 2</div>
  <div class="p-2 border">Item 3</div>
</div>
`;
const mediaObjectHtml = `<div class="d-flex">
  <div class="flex-shrink-0">
    <div class="bg-secondary rounded p-3" style="width:64px;height:64px"></div>
  </div>
  <div class="flex-grow-1 ms-3">
    <h4>Media heading</h4>
    <p>This is some content next to a media object. You can replace this with any content.</p>
  </div>
</div>
`;
const practicalHtml = `<div class="d-flex justify-content-between align-items-center p-3 border rounded">
  <div>
    <h4 class="mb-0">Dashboard</h4>
    <small class="text-muted">Welcome back</small>
  </div>
  <div class="d-flex gap-2">
    <button class="secondary">Settings</button>
    <button>New Project</button>
  </div>
</div>
`;
</script>

# Flexbox

Manage layout, alignment, and sizing with a full suite of responsive flexbox utilities.

## Direction

Set the direction of flex items with `.flex-row`, `.flex-row-reverse`, `.flex-column`, and `.flex-column-reverse`.

<HtmlPreviewer :code="directionHtml" />

## Justify Content

Align flex items on the main axis.

<HtmlPreviewer :code="justifyContentHtml" />

Responsive variations: `.justify-content-{breakpoint}-{value}`.

## Align Items

Align flex items on the cross axis.

<HtmlPreviewer :code="alignItemsHtml" />

Responsive variations: `.align-items-{breakpoint}-{value}`.

## Align Self

Individually change alignment of flex items on the cross axis.

<HtmlPreviewer :code="alignSelfHtml" />

## Fill

Force sibling elements into equal widths using `.flex-fill`.

<HtmlPreviewer :code="flexFillHtml" />

## Grow and Shrink

Toggle a flex item's ability to grow or shrink.

<HtmlPreviewer :code="growShrinkHtml" />

## Auto Margins

Use auto margins with flexbox to push items apart.

<HtmlPreviewer :code="autoMarginsHtml" />

## Wrap

Control how flex items wrap within a container.

<HtmlPreviewer :code="wrapHtml" />

## Order

Change the visual order of flex items. Values range from `0` to `5`, plus `first` and `last`.

<HtmlPreviewer :code="orderHtml" />

## Stacks

Use `.hstack` and `.vstack` for quick horizontal and vertical layouts.

<HtmlPreviewer :code="stacksHtml" />

## Flow Layouts

Use `.flow-h` and `.flow-v` for fluid, stretchable layouts that fill available space. Unlike stacks, these flow layouts grow to fill their container.

| Class | Description |
|-------|-------------|
| `.flow-h` | Horizontal flow with items aligned to start, stretching to fill available width |
| `.flow-v` | Vertical flow with items stretching to fill available height |

<HtmlPreviewer :code="flowHtml" />

## Media Object

Build a media object layout with flex utilities.

<HtmlPreviewer :code="mediaObjectHtml" />

## Practical Examples

### Header Bar

<HtmlPreviewer :code="practicalHtml" />
