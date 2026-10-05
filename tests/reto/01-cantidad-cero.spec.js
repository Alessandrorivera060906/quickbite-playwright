const { test, expect } = require('@playwright/test');

test('RETO 1 - no debería permitirse agregar cantidad cero', async ({ page }) => {
  await page.goto('/');

  const hamburguesa = page.locator('article.card').filter({
    has: page.getByRole('heading', { name: 'Hamburguesa Clásica' })
  });

  // TODO 1: presiona el botón menos hasta intentar llegar a 0.
  // Pista: dentro de esta tarjeta existe un botón con data-minus="1".

  // TODO 2: escribe una expectativa que compruebe que la cantidad mínima debería ser 1.
  // Pista: la cantidad se muestra en #q1.

  // Ejemplo de estructura:
  // await hamburguesa.locator('...').click();
  // await expect(page.locator('...')).toHaveText('...');
});
