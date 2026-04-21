---
title: table
---

<script setup>
const example1Html = `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>User</td>
    </tr>
  </tbody>
</table>
`;
</script>

# &lt;table&gt;

The `<table>` element represents tabular data arranged in rows and columns. Use `<thead>`, `<tbody>`, and `<tfoot>` for structure, and `<th scope="col">` or `<th scope="row">` to associate header cells with data cells for screen readers.

## Basic Table

<HtmlPreviewer :code="example1Html" />

For `.striped` table styles, see [Table Variants](/variants/components/tables).
