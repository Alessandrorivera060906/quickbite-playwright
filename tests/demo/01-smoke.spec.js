const { test, expect } = require('@playwright/test');

test('SMOKE - QuickBite carga y permite agregar un producto', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Menú' })).toBeVisible();
  await expect(page.getByText('Tu carrito está vacío.')).toBeVisible();

  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa Clásica' })
  });

  await hamburguesa.getByRole('button', { name: 'Agregar' }).click();

  await expect(page.locator('#cart')).toContainText('Hamburguesa Clásica');
  await expect(page.locator('#summary')).toContainText('Q35.00');
});
