export const ProgressDemo = {
  basicProgress() {
    return `<progress value="0" max="100"></progress>
<progress value="50" max="100"></progress>
<progress value="100" max="100"></progress>
`;
  },

  indeterminate() {
    return `<progress></progress>
`;
  },

  withLabel() {
    return `<label>
  Upload progress
  <progress value="50" max="100">50%</progress>
</label>
`;
  },
};
