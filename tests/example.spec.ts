import { test, expect } from '@playwright/test';

test('Mon premier test Playwright', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
  console.log('✅ Test réussi ! Titre :', title);
});