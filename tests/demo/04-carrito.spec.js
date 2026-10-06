const { test, expect } = require('@playwright/test');

test('DEMO - agregar Hamburguesa BBQ actualiza el carrito', async ({ page }) => {

  // ARRANGE
  await page.goto('/');

  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa BBQ' })
  });

  // ACT
  await hamburguesa.getByRole('button', { name: 'Agregar' }).click();

  // ASSERT
const resumen = page.locator('#summary');

await expect(
  resumen.getByText('Q40.00', { exact: true })
).toBeVisible();

});