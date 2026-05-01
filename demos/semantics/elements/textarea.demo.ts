export const TextareaDemo = {
  basicTextarea() {
    return `<textarea
  name="bio"
  placeholder="Write a professional short bio..."
  aria-label="Professional short bio"
></textarea>
`;
  },

  withLabel() {
    return `<label for="message">Message</label>
<textarea id="message" rows="4" placeholder="Enter your message"></textarea>
`;
  },

  withRows() {
    return `<textarea rows="3" placeholder="Three rows"></textarea>
<textarea rows="6" placeholder="Six rows"></textarea>
`;
  },
};
