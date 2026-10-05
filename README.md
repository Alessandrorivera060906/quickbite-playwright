# QuickBite QA Challenge — Automatización con Playwright

En la sesión anterior probaste QuickBite manualmente. Ahora convertirás algunos de esos controles en **pruebas automatizadas**.

## Antes de empezar

Este repositorio está preparado para **GitHub Codespaces**. No necesitas instalar Node.js, Playwright ni un navegador en tu computadora.

### 1. Abre tu Codespace
En GitHub selecciona **Code → Codespaces → Create codespace on main**.
Espera a que aparezca VS Code en el navegador y a que termine la preparación del entorno.

### 2. Verifica el laboratorio
En la terminal ejecuta:

```bash
npm run verificar
```

Debes obtener **1 passed**.

### 3. Conoce una prueba automatizada
Abre `tests/demo/01-smoke.spec.js`. Identifica tres partes:
- **Acción:** lo que Playwright hace.
- **Resultado esperado:** lo que debería ocurrir.
- **Assertion (`expect`)**: cómo Playwright comprueba ese resultado.

Puedes ejecutarla con:

```bash
npx playwright test tests/demo/01-smoke.spec.js
```

## Tu misión

Completa los `TODO` de los archivos dentro de `tests/reto/`.

### Reto 1 — Cantidad mínima
Requisito: un producto no debería poder tener cantidad menor que 1.

```bash
npm run reto:1
```

### Reto 2 — Dirección obligatoria
Requisito: el sistema no debería permitir continuar al pago sin dirección de entrega.

```bash
npm run reto:2
```

### Reto 3 — Regresión de envío
Requisito conocido de QuickBite v2.4: los pedidos con subtotal de Q100 o más tenían envío gratis. Comprueba que la nueva versión conserve ese comportamiento.

```bash
npm run reto:3
```

## Importante
Una prueba en rojo **no significa automáticamente que escribiste mal la prueba**. Si el resultado esperado está respaldado por el requisito y la automatización reproduce correctamente los pasos, acabas de encontrar evidencia de un posible defecto.

## Cierre
Cuando termines, responde:
1. ¿Qué ventaja tuvo automatizar la prueba frente a repetirla manualmente?
2. ¿Por qué no deberíamos interpretar todo resultado rojo como un error del script?
3. ¿Qué tipo de pruebas tendría sentido ejecutar automáticamente después de cada nueva versión?
