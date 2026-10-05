# Guía rápida del estudiante

## Objetivo
Automatizar tres comprobaciones de QuickBite usando pruebas existentes como ejemplo. No necesitas construir un proyecto Playwright desde cero.

## Flujo
1. Abre el Codespace.
2. Ejecuta `npm run verificar`.
3. Observa `tests/demo/01-smoke.spec.js`.
4. Completa un reto a la vez en `tests/reto/`.
5. Ejecuta únicamente el reto que estás trabajando.
6. Interpreta el resultado: PASS o FAIL.

## Pistas de sintaxis

Hacer clic:
```js
await elemento.click();
```

Comprobar texto:
```js
await expect(elemento).toHaveText('texto esperado');
```

Comprobar que algo sea visible:
```js
await expect(elemento).toBeVisible();
```

Comprobar contenido parcial:
```js
await expect(elemento).toContainText('texto esperado');
```

No cambies el código de `app/`. Tu trabajo es **probar el producto**, no corregirlo.
