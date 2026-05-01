import * as HgroupDemo from "@demos/semantics/elements/hgroup.demo";

export const basic = `<article>
  <h2>Hello World</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
</article>`;

export const hgroup = `<article>${HgroupDemo.basic}</article>`;

export const card = `<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>`;

export const cardWithHeader = `<article class="card">
  <header>
    <h3>Card Title</h3>
  </header>
  <p>Card content.</p>
</article>`;

export const cardWithFooter = `<article class="card">
  <p>Card content.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>`;

export const completeCard = `<article class="card">
  <header>
    <hgroup>
      <h3>Card Title</h3>
      <p>Subtitle</p>
    </hgroup>
  </header>
  <p>Card content goes here with some more text.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>`;

export const multipleParagraphs = `<article>
  <h2>Hello World</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
  <p>Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.</p>
</article>`;
