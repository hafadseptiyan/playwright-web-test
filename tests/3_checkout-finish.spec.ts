import { test } from '@playwright/test';
import { LoginPage } from '../handlers/loginPage';
import { InventoryPage } from '../handlers/itemPage';
import { CartPage } from '../handlers/cartPage';
import { CheckoutPage } from '../handlers/checkoutPage';
import { getRandomInt } from '../utils/helpers';

test('Full flow test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const itemCount = getRandomInt(2, 4);
  for (let i = 0; i < itemCount; i++) {
    await inventoryPage.addItemByIndex(i);
  }

  await inventoryPage.goToCart();
  await cartPage.removeItemByIndex(0);

  // Checkout process
  await cartPage.checkout();
  await checkoutPage.fillForm('Test', 'Ordwe', '65171');
  await checkoutPage.continue();
  await checkoutPage.finish();

  // Assert order completion
  await checkoutPage.assertOrderCompletion();
});
