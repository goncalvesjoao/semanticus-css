export const DisabledDemo = {
  button() {
    return `<div role="toolbar">
  <button disabled>Disabled</button>
  <button class="secondary" disabled>Disabled</button>
  <button class="contrast" disabled>Disabled</button>
</div>
`;
  },

  input() {
    return `<input type="text" name="text" placeholder="Disabled" aria-label="Disabled input" disabled />
`;
  },

  range() {
    return `<label>
  Disabled slider
  <input type="range" disabled />
</label>
`;
  },

  select() {
    return `<select name="meal-type" aria-label="Select a meal type..." disabled>
  <option>Select a meal type...</option>
  <option>...</option>
</select>
`;
  },

  switch_() {
    return `<fieldset>
  <label>
    <input name="publish" type="checkbox" role="switch" disabled />
    Publish on my profile
  </label>
  <label>
    <input name="change-password" type="checkbox" role="switch" checked disabled />
    Change my password at next login
  </label>
</fieldset>
`;
  },

  textarea() {
    return `<textarea name="disabled" disabled>
  Disabled
</textarea>
`;
  },
};
