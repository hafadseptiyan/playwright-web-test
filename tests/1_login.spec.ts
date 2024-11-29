import { test } from '@playwright/test';
import { LoginPage } from '../handlers/loginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.loginAssertions();
});
