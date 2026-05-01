export const basic = `<form role="search">
  <input type="search" placeholder="Search...">
  <button type="submit">Search</button>
</form>`;

export const withIconButton = `<form role="search">
  <input type="search" placeholder="Search products...">
  <button type="submit" aria-label="Search">→</button>
</form>`;

export const filterSearch = `<form role="search">
  <select aria-label="Category">
    <option>All Categories</option>
    <option>Products</option>
    <option>Services</option>
    <option>Support</option>
  </select>
  <input type="search" placeholder="Search...">
  <button type="submit">Go</button>
</form>`;
