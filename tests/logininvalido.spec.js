/*
-------------------------------------------
Nombre: Wilcox Saint-Hilaire
 Curso: Automatizacion de Pruebas
 Practica: Login Incorrecto
 Profesor: Felix Lora
 ------------------------------------------*/
//importar Playwright test

import { test, expect } from '@playwright/test';

 //definir el bloque de pruebas

test('Login con credencial invalida', async ({page})=>{

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.pause();
//validando el usuario y la contraseña

    await page.getByPlaceholder('Username').fill('Admin1');
   
    await page.getByPlaceholder('Password').fill('admin123');

   //await page.waitForTimeout(5000);

   await page.locator('button[type="submit"]').click();

  await expect(page.getByText('Invalido usuario')).toBeVisible();

  });