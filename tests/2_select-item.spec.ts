import { test } from '@playwright/test';
import { LoginPage } from '../handlers/loginPage';
import { InventoryPage } from '../handlers/itemPage';

test('Select 2, 3, and 4 items', async ({ page }) => {
  const loginPage     = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Select by items
  await inventoryPage.addItemByIndex(0);
  await inventoryPage.addItemByIndex(1);
  await inventoryPage.addItemByIndex(2);
  await inventoryPage.addItemByIndex(3);
});
