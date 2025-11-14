import { test, expect } from '@playwright/test';

test('Login avec debug et screenshots', async ({ page }) => {
  // Capture avant tout
  await page.screenshot({ path: 'screenshots/01-avant-login.png' });

  await page.goto('https://the-internet.herokuapp.com/login');
  await page.screenshot({ path: 'screenshots/02-page-chargee.png' });

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.screenshot({ path: 'screenshots/03-formulaire-rempli.png' });

  await page.click('button[type="submit"]');
  await page.screenshot({ path: 'screenshots/04-apres-clic.png' });

  // Assertion
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!', { timeout: 5000 });
});