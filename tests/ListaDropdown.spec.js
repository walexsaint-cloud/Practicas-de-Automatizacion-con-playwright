/*
-------------------------------------------
Nombre: Wilcox Saint-Hilaire
 Curso: Automatizacion de Pruebas
 Practica: Lista o Drop Down  empleado
 Profesor: Felix Lora
 ------------------------------------------*/
//importar librerías de Playwright test
import { test, expect } from '@playwright/test';

//login usuario y contraseña
test('Login automatizado en OrangeHRM demo', async ({ page }) => {
 await page.pause();
    // 1) Ir a la página de login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    // 2) llenar campos de usuario y contraseña
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    
    // 3) Hacer clic en el botón de login
    await page.click('button[type="submit"]');

    // 4) seleccionar boton pim 
    await page.getByRole('link', { name: 'PIM' }).click();

    // 5) hacer click en oxd-topbar-body-nav-tab-item Employee List
    await page.getByRole('link', { name: 'Employee List' }).click();

    // 6) hacer click en el campo Employee Name
   // await page.getByPlaceholder('Type for hints...').click();

    // 7) escribir el nombre del empleado
    await page.getByPlaceholder('Type for hints...').first().fill('Wilcox');

    // 8) hacer click en el boton search
    await page.getByRole('button', { name: 'Search' }).click(); 

    // 9) editar el empleado localizador oxd-icon bi-pencil-fill
    await page.locator('.oxd-icon.bi-pencil-fill').click();

    // 10) Abrir dropdown Marital Status drop down tipo indice
    await page.locator(
    "//label[text()='Marital Status']/following::div[contains(@class,'oxd-select-text')][2]"
    ).click();

    // Seleccionar opción Single drop down tipo label
    await page.locator("//span[text()='Single']").click();

    // click en el boton save
    await page.getByRole('button', { name: 'Save' }).last().click();

   /*
    // seleccionar drop down para nacionalidad
    await page.locator("//span[text()='Dominican']").click();
   
    // Abrir dropdown Nationality
  await page.locator('div.oxd-select-text').nth(1).click();

   // Seleccionar opción
  await page.getByRole('option', { name: 'Dominican' }).click();
const nationalityDropdown = page.locator(
  '//label[text()="Nationality"]/../following-sibling::div'
);

await nationalityDropdown.click();

await page.getByRole('option', { name: 'Dominican' }).click();

*/





}) ;