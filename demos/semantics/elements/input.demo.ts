export const InputDemo = {
  basicInputs() {
    return `<input type="text" name="text" placeholder="Text" aria-label="Text" />
<input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email" />
<input type="number" name="number" placeholder="Number" aria-label="Number" />
<input type="password" name="password" placeholder="Password" aria-label="Password" />
<input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autocomplete="tel" />
<input type="url" name="url" placeholder="Url" aria-label="Url" />
`;
  },

  datetimeInput() {
    return `<input type="date" name="date" aria-label="Date" />
<input type="datetime-local" name="datetime-local" aria-label="Datetime local" />
<input type="month" name="month" aria-label="Month" />
<input type="time" name="time" aria-label="Time" />
`;
  },

  searchInput() {
    return `<input type="search" name="search" placeholder="Search" aria-label="Search" />
`;
  },

  colorInput() {
    return `<input type="color" value="#ff9500" aria-label="Color picker" />
`;
  },

  fileInput() {
    return `<input type="file" />
`;
  },

  basicCheckbox() {
    return `<fieldset>
  <legend>Language preferences:</legend>
  <label>
    <input type="checkbox" name="english" checked />
    English
  </label>
  <label>
    <input type="checkbox" name="mandarin" />
    Mandarin
  </label>
  <label aria-disabled="true">
    <input type="checkbox" name="dothraki" disabled />
    Dothraki
  </label>
</fieldset>
`;
  },

  horizontalCheckbox() {
    return `<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label for="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label for="swahili">Swahili</label>
  <input type="checkbox" id="navi" name="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;
  },

  singleCheckbox() {
    return `<label>
  <input type="checkbox" name="agree">
  I agree to the terms
</label>
`;
  },

  basicRadio() {
    return `<fieldset>
  <legend>Language preference:</legend>
  <label>
    <input type="radio" name="language" checked value="english" />
    English
  </label>
  <label>
    <input type="radio" name="language" value="mandarin" />
    Mandarin
  </label>
  <label aria-disabled="true">
    <input type="radio" name="language" value="dothraki" disabled />
    Dothraki
  </label>
</fieldset>
`;
  },

  horizontalRadio() {
    return `<fieldset>
  <legend>Second language:</legend>
  <input type="radio" id="hindi" name="second-language" checked value="hindi" />
  <label for="hindi">Hindi</label>
  <input type="radio" id="swahili" name="second-language" value="swahili" />
  <label for="swahili">Swahili</label>
  <input type="radio" id="navi" name="second-language" value="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;
  },

  basicRange() {
    return `<label>
  Brightness
  <input type="range" />
</label>

<label>
  Contrast
  <input type="range" value="40" />
</label>
`;
  },

  rangeWithMinMax() {
    return `<label>
  Volume
  <input type="range" min="0" max="100" value="50" />
</label>
`;
  },

  rangeWithStep() {
    return `<label>
  Rating (0-10)
  <input type="range" min="0" max="10" step="1" value="5" />
</label>
`;
  },

  basicSwitch() {
    return `<fieldset>
  <label>
    <input name="terms" type="checkbox" role="switch" />
    I agree to the Terms
  </label>
  <label>
    <input name="opt-in" type="checkbox" role="switch" checked />
    Receive news and offers
  </label>
</fieldset>
`;
  },
};
