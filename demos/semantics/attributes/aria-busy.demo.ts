export const AriaBusyDemoArgs = {
  basicLoading: `<article class="card" aria-busy="true">
  Loading content...
</article>
`,
  loadingButton: `<button aria-busy="true" disabled>Loading...</button>
`,
  loadingCard: `<article class="card" aria-busy="true">
  <header>
    <h3>Loading Title</h3>
  </header>
  <p>Loading content...</p>
</article>
`,
  loadingForm: `<form aria-busy="true">
  <label>Name</label>
  <input type="text" disabled>
  <label>Email</label>
  <input type="email" disabled>
  <button disabled>Submit</button>
</form>
`,
};

export const AriaBusyDemo = {
  basicLoading() {
    return AriaBusyDemoArgs.basicLoading;
  },
  loadingButton() {
    return AriaBusyDemoArgs.loadingButton;
  },
  loadingCard() {
    return AriaBusyDemoArgs.loadingCard;
  },
  loadingForm() {
    return AriaBusyDemoArgs.loadingForm;
  },
};
