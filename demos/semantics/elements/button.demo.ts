export const ButtonDemo = {
  basic() {
    return `<button>Button</button>
`;
  },

  formButtons() {
    return `<input type="submit" value="Submit">
<input type="button" value="Input Button">
`;
  },

  resetButton() {
    return `<input type="reset" value="Reset">
`;
  },

  loginForm() {
    return `<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Password">
  <button type="submit">Sign In</button>
</form>
`;
  },
};
