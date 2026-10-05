const { test, expect } = require('@playwright/test');

test('el laboratorio está listo', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'QuickBite' })).toBeVisible();
  await expect(page.getByText('10% de descuento en todos los pedidos')).toBeVisible();
});
