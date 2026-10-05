const { test, expect } = require('@playwright/test');

test('RETO 2 - no debería continuar al pago con dirección vacía', async ({ page }) => {
  await page.goto('/');

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });
  await pizza.getByRole('button', { name: 'Agregar' }).click();
  await page.getByRole('button', { name: /Continuar con el pedido/ }).click();

  // La dirección inicia vacía.
  await expect(page.locator('#address')).toHaveValue('');

  // TODO 1: intenta continuar al pago.

  // TODO 2: verifica que el formulario de dirección DEBERÍA seguir visible.
  // Pista: busca el heading "Dirección de entrega".
});
