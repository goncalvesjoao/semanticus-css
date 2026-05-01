export const FieldsetDemo = {
  basic() {
    return `<fieldset>
  <legend>Personal Information</legend>
  <label>
    First name
    <input name="first_name" placeholder="First name" autocomplete="given-name" />
  </label>
  <label>
    Last name
    <input name="last_name" placeholder="Last name" autocomplete="family-name" />
  </label>
  <label>
    Email
    <input type="email" name="email" placeholder="Email" autocomplete="email" />
  </label>
</fieldset>
`;
  },

  insideForm() {
    return `<form>
  <fieldset>
    <label>
      First name
      <input name="first_name" placeholder="First name" autocomplete="given-name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="Email" autocomplete="email" />
    </label>
  </fieldset>
  <input type="submit" value="Subscribe" />
</form>
`;
  },

  disabled_() {
    return `<fieldset disabled>
  <legend>Disabled fieldset</legend>
  <label>
    Username
    <input name="username" placeholder="Username" />
  </label>
  <label>
    Password
    <input type="password" name="password" placeholder="Password" />
  </label>
  <input type="submit" value="Sign in" />
</fieldset>
`;
  },

  withGroup() {
    return `<form>
  <fieldset role="group">
    <input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>
`;
  },
};
