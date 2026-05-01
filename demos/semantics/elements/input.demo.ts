export const basicInputs = `<input type="text" name="text" placeholder="Text" aria-label="Text" />
<input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email" />
<input type="number" name="number" placeholder="Number" aria-label="Number" />
<input type="password" name="password" placeholder="Password" aria-label="Password" />
<input type="tel" name="tel" placeholder="Tel" aria-label="Tel" autocomplete="tel" />
<input type="url" name="url" placeholder="Url" aria-label="Url" />
`;

export const datetimeInput = `<input type="date" name="date" aria-label="Date" />
<input type="datetime-local" name="datetime-local" aria-label="Datetime local" />
<input type="month" name="month" aria-label="Month" />
<input type="time" name="time" aria-label="Time" />
`;

export const searchInput = `<input type="search" name="search" placeholder="Search" aria-label="Search" />
`;

export const colorInput = `<input type="color" value="#ff9500" aria-label="Color picker" />
`;

export const fileInput = `<input type="file" />
`;

export const basicCheckbox = `<fieldset>
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

export const horizontalCheckbox = `<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label for="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label for="swahili">Swahili</label>
  <input type="checkbox" id="navi" name="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;

export const singleCheckbox = `<label>
  <input type="checkbox" name="agree">
  I agree to the terms
</label>
`;

export const basicRadio = `<fieldset>
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

export const horizontalRadio = `<fieldset>
  <legend>Second language:</legend>
  <input type="radio" id="hindi" name="second-language" checked value="hindi" />
  <label for="hindi">Hindi</label>
  <input type="radio" id="swahili" name="second-language" value="swahili" />
  <label for="swahili">Swahili</label>
  <input type="radio" id="navi" name="second-language" value="navi" disabled />
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;

export const basicRange = `<label>
  Brightness
  <input type="range" />
</label>

<label>
  Contrast
  <input type="range" value="40" />
</label>
`;

export const rangeWithMinMax = `<label>
  Volume
  <input type="range" min="0" max="100" value="50" />
</label>
`;

export const rangeWithStep = `<label>
  Rating (0-10)
  <input type="range" min="0" max="10" step="1" value="5" />
</label>
`;

export const basicSwitch = `<fieldset>
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
