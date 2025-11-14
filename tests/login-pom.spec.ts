import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login avec POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.expectSuccess();
});