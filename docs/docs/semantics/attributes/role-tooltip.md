<script setup>
const example1Html = `<p>Tooltip on a <span><a href="#" aria-describedby="tip-link">link</a><span id="tip-link" role="tooltip" data-placement="right">Tooltip</span></span></p>
<p>Tooltip on <span><em aria-describedby="tip-em">inline element</em><span id="tip-em" role="tooltip">Tooltip</span></span></p>
<p><span><button aria-describedby="tip-btn">Tooltip on a button</button><span id="tip-btn" role="tooltip" data-placement="bottom">Tooltip</span></span></p>
`;
const example2Html = `<div role="toolbar">
  <span><button aria-describedby="tip-top">Top</button><span id="tip-top" role="tooltip">Top</span></span>
  <span><button aria-describedby="tip-right">Right</button><span id="tip-right" role="tooltip" data-placement="right">Right</span></span>
  <span><button aria-describedby="tip-bottom">Bottom</button><span id="tip-bottom" role="tooltip" data-placement="bottom">Bottom</span></span>
  <span><button aria-describedby="tip-left">Left</button><span id="tip-left" role="tooltip" data-placement="left">Left</span></span>
</div>
`;
</script>

# Tooltip

Enable tooltips everywhere, without JavaScript.

## Syntax

Pair a trigger element with `aria-describedby` pointing to another element with `role="tooltip"`, and the tooltip will be displayed when the trigger is hovered or focused.

<HtmlPreviewer :code="example1Html" />

## Placement

The tooltip is displayed on top by default but you can change it with the `data-placement` attribute on the tooltip element.

<HtmlPreviewer :code="example2Html" />
