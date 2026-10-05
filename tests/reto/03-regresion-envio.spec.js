const { test, expect } = require('@playwright/test');

test('RETO 3 - pedidos de Q100 o más deberían conservar envío gratis', async ({ page }) => {
  await page.goto('/');

  // Regla conocida de QuickBite v2.4:
  // subtotal >= Q100 => envío gratis.
  // Sugerencia: agrega 2 pizzas Pepperoni (Q55 c/u = Q110).

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });

  // TODO 1: cambia la cantidad a 2 y agrégala.
  // TODO 2: comprueba subtotal Q110.00.
  // TODO 3: comprueba que el envío DEBERÍA ser Q0.00.
});
