import { test, expect } from '@playwright/test';

test('Login automatizado en OrangeHRM demo', async ({ page }) => {
  // 1) Ir a la página de login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // 2) Rellenar usuario y contraseña
  await page.fill('input[name="username"]', ' ');
  await page.fill('input[name="password"]', ' ');

  // 3) Hacer clic en el botón de login
  await page.click('button[type="submit"]');

  // 4) Esperar a que cargue la página de dashboard
  await page.waitForNavigation();

  // 5) Verificar que el dashboard se ve (opcional)
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});