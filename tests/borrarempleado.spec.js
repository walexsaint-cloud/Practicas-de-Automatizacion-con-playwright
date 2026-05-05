/*
-------------------------------------------
Nombre: Wilcox Saint-Hilaire
 Curso: Automatizacion de Pruebas
 Practica: Borrar empleado
 Profesor: Felix Lora
 ------------------------------------------*/
//importar Playwright test

import { test, expect } from '@playwright/test';

 //definir el bloque de pruebas

test('Login con credencial valida', async ({page})=>{

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.pause();
//validando el usuario y la contraseña

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

   //await page.waitForTimeout(5000);

   await page.locator('button[type="submit"]').click();

   // seleccionar boton pim
    await page.getByRole('link', { name: 'PIM' }).click();

       // llenando  el campo First Name, middle name y last name
    await page.getByPlaceholder('Type for hints...').first().fill('Wilcox');
    await page.locator('button[type="submit"]').click();

    // 7) seleccionar checkbox de Create Login Details
    //await page.getByText('Create Login Details').click();
   
    // 8) completar campo oxd-input oxd-input--active
    //await page.locator('.oxd-input').nth(4).fill('Reynaldo'); // Reemplaza 'Reynaldo123' con el valor que deseas ingresar en Employee Id

    // 9) completar el campo password y confirm password, este campo no es placeholder, es un input activo
    //await page.locator('.oxd-input').nth(5).fill('Reynaldo123'); // Reemplaza 'Reynaldo123' con el valor que deseas ingresar en Other Id
    // await page.locator('.oxd-input--active').nth(6).fill('Reynaldo123'); // Reemplaza 'Reynaldo123' con el valor que deseas ingresar en Other Id   


    // click en el boton save
    //await page.getByRole('button', { name: 'Save' }).last().click();
 

  });