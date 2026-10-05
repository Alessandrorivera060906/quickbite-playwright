const { test, expect } = require('@playwright/test');

test('FLUJO - un pedido puede llegar hasta confirmación', async ({ page }) => {
  await page.goto('/');

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });
  await pizza.getByRole('button', { name: 'Agregar' }).click();

  await page.getByRole('button', { name: /Continuar con el pedido/ }).click();
  await expect(page.getByRole('heading', { name: /Dirección de entrega/ })).toBeVisible();

  await page.locator('#address').fill('10a avenida 5-20, zona 10');
  await page.getByRole('button', { name: /Continuar al pago/ }).click();
  await expect(page.getByRole('heading', { name: /Pago con tarjeta/ })).toBeVisible();

  await page.getByRole('button', { name: 'Pagar' }).click();
  await expect(page.getByText(/Pago aprobado/)).toBeVisible();

  await page.getByRole('button', { name: /Ir a confirmación/ }).click();
  await expect(page.getByRole('heading', { name: /Confirmación/ })).toBeVisible();
  await expect(page.locator('#confirmationText')).toContainText('APROBADO');
});
