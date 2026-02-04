import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login works', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Playwright');
  await expect(page).toHaveURL(/google.com\/search/);
});
