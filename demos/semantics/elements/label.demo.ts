export const inputInside = `<label>
  First name
  <input name="first_name" placeholder="First name" autocomplete="given-name" />
</label>
<label>
  Email
  <input type="email" name="email" placeholder="Email" autocomplete="email" />
</label>
`;

export const inputOutside = `<label for="first_name">First name</label>
<input name="first_name" id="first_name" placeholder="First name" autocomplete="given-name" />
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="Email" autocomplete="email" />
`;
