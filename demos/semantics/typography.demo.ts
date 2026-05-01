export const TypographyDemo = {
  headings() {
    return `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
`;
  },

  hgroup() {
    return `<hgroup>
  <h2>Get inspired with CSS</h2>
  <p>How to use CSS to add glam to your Website?</p>
</hgroup>
`;
  },

  inline() {
    return `<div role="toolbar">
  <p><strong>Bold</strong> <code>&lt;strong&gt;</code> <code>&lt;b&gt;</code></p>
  <p><em>Italic</em> <code>&lt;i&gt;</code> <code>&lt;em&gt;</code> <code>&lt;cite&gt;</code></p>
</div>
<div role="toolbar">
  <p><u>Underline</u> <code>&lt;u&gt;</code></p>
  <p><s>Strikethrough</s> <code>&lt;s&gt;</code></p>
</div>
<div role="toolbar">
  <p><ins>Inserted</ins> <code>&lt;ins&gt;</code></p>
  <p><del>Deleted</del> <code>&lt;del&gt;</code></p>
</div>
<div role="toolbar">
  <p>Text <sup>Sup</sup> <code>&lt;sup&gt;</code></p>
  <p>Text <sub>Sub</sub> <code>&lt;sub&gt;</code></p>
</div>
<div role="toolbar">
  <p><small>Small</small> <code>&lt;small&gt;</code></p>
  <p><abbr title="Abbreviation">Abbr</abbr> <code>&lt;abbr&gt;</code></p>
</div>
<div role="toolbar">
  <p><kbd>Ctrl + S</kbd> <code>&lt;kbd&gt;</code></p>
  <p><mark>Highlighted</mark> <code>&lt;mark&gt;</code></p>
</div>`;
  },

  lists() {
    return `<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
  <li>Unordered list item 3</li>
</ul>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
</ol>

<dl>
  <dt>Definition term</dt>
  <dd>Definition description</dd>
  <dt>Another term</dt>
  <dd>Another description</dd>
</dl>
`;
  },

  blockquote() {
    return `<blockquote>
  "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works."
  <footer>
    <cite>— Steve Jobs</cite>
  </footer>
</blockquote>
`;
  },

  hr() {
    return `<p>Paragraph before the horizontal line.</p>
<hr />
<p>Paragraph after the horizontal line.</p>
`;
  },

  address() {
    return `<address>
  <strong>Company Name</strong><br />
  123 Main Street<br />
  City, Country 12345<br />
  <a href="mailto:contact@example.com">contact@example.com</a>
</address>
`;
  },

  codeInline() {
    return `<p>Use the <code>npm install</code> command to install dependencies.</p>
`;
  },

  codeKbd() {
    return `<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
`;
  },

  codeSamp() {
    return `<p><samp>Error: File not found</samp></p>
`;
  },
};
