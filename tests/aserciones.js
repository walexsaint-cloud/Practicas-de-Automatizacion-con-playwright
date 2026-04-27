import { test, expect } from '@playwright/test';

test('Login automatizado en OrangeHRM demo', async ({ page }) => {
  // 1) Logo sea visible en la pantalla de login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect {page.locator{class="orangehrm-login-logo-mobile"}}.toHaveCount(1);
   // class="orangehrm-login-logo-mobile"><img data-v-6adfd385="" src="/web/images/ohrm_logo.png" alt="orangehrm-logo"></div>
  // 2) validr el campo username y password esten habiles
  await page.fill('input[name="username"]', ' ');
  await page.fill('input[name="password"]', ' ');

  // 3) Validar el botón de login este habilitado para cargar la pagina
  await page.click('button[type="submit"]');

  // 4) Esperar a que cargue la página de dashboard
  await page.waitForNavigation();

  // 5) Verificar que el dashboard se ve (opcional)
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});