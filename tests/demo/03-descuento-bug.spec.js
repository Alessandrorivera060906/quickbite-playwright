const { test, expect } = require('@playwright/test');

test('BUG - la promoción anunciada debe aplicar exactamente 10%', async ({ page }) => {
  await page.goto('/');

  // 2 Hamburguesas Clásicas + 1 Bebida Natural = subtotal Q80.00
  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa Clásica' })
  });
  await hamburguesa.locator('[data-plus="1"]').click();
  await hamburguesa.getByRole('button', { name: 'Agregar' }).click();

  const bebida = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Bebida Natural' })
  });
  await bebida.getByRole('button', { name: 'Agregar' }).click();

  await expect(page.locator('#summary')).toContainText('SubtotalQ80.00');

  // Requisito: promoción del 10% => Q8.00 de descuento.
  // Esta expectativa FALLARÁ intencionalmente en QuickBite v2.5.
  await expect(page.locator('#summary')).toContainText('Descuento (10%)-Q8.00');
});
