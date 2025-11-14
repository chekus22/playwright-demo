import { test, expect } from '@playwright/test';

test('Login avec attentes automatiques', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Playwright attend que le champ soit visible ET cliquable
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Attente auto : bouton visible + activé
  await page.click('button[type="submit"]');

  // Playwright attend que le message apparaisse
  await expect(page.locator('.flash.success')).toContainText('secure area');
});