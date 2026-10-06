const { test, expect } = require('@playwright/test');

test('RETO 3 - pedidos de Q100 o más deberían conservar envío gratis', async ({ page }) => {
  await page.goto('/');

  // Regla conocida de QuickBite v2.4:
  // subtotal >= Q100 => envío gratis.
  //
  // En esta versión queremos comprobar que esa regla
  // sigue funcionando después de los cambios realizados.

  const pizza = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
  });

  // Cada Pizza Pepperoni cuesta Q55.00.
  // Con 2 pizzas tendremos un subtotal de Q110.00.

  // TODO 1: cambia la cantidad de Pizza Pepperoni a 2.
  // Pista: dentro de la tarjeta existe un botón "+".


  // TODO 2: agrega las 2 pizzas al carrito.
  // Pista: utiliza el botón "Agregar" de esta misma tarjeta.


  // TODO 3: comprueba que el subtotal sea Q110.00.
  // Pista: puedes buscar el texto exacto "Q110.00".


  // TODO 4: comprueba que el envío DEBERÍA ser Q0.00.
  // Pista: si la regla anterior sigue funcionando,
  // debería aparecer exactamente "Q0.00" en el resumen del pedido.


  // Ejemplos de estructuras que puedes utilizar:
  // await pizza.getByRole('button', { name: '+' }).click();
  // await expect(page.getByText('...', { exact: true })).toBeVisible();
});