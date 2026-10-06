const { test, expect } = require('@playwright/test');

test.describe('HUMAN vs MACHINE', () => {

  test('1 - agregar Hamburguesa BBQ al carrito', async ({ page }) => {
    await page.goto('/');

    const hamburguesa = page.locator('article.card').filter({
      has: page.getByRole('heading', { name: 'Hamburguesa BBQ' })
    });

    await hamburguesa.getByRole('button', { name: 'Agregar' }).click();

    await expect(
      page.getByText('Hamburguesa BBQ', { exact: true })
    ).toHaveCount(2);
  });

  test('2 - agregar dos Pizza Pepperoni', async ({ page }) => {
    await page.goto('/');

    const pizza = page.locator('article.card').filter({
      has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
    });

    await pizza.getByRole('button', { name: '+' }).click();
    await pizza.getByRole('button', { name: 'Agregar' }).click();

    await expect(
      page.getByText('Q110.00', { exact: true })
    ).toBeVisible();
  });

  test('3 - avanzar hasta dirección de entrega', async ({ page }) => {
    await page.goto('/');

    const pizza = page.locator('article.card').filter({
      has: page.getByRole('heading', { name: 'Pizza Pepperoni' })
    });

    await pizza.getByRole('button', { name: 'Agregar' }).click();

    await page
      .getByRole('button', { name: /Continuar con el pedido/ })
      .click();

    await expect(
      page.getByRole('heading', { name: 'Dirección de entrega' })
    ).toBeVisible();
  });

});