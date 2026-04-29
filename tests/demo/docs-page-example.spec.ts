import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 400, height: 200 } });

test('Demo/Semantics - visual snapshot', async ({ page }) => {
  await page.goto('/iframe.html?id=demo-docspageexample--docs-page-example');
  const main = page.locator('main');

  await expect(main).toBeVisible();
  await expect(main).toHaveScreenshot({ animations: 'disabled' });
});
