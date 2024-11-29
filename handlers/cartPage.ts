import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItemByIndex(index: number) {
    const cartItems = await this.page.locator('.cart_item').count();
  
    if (cartItems === 0) {
      throw new Error('No items in the cart to remove.');
    }
  
    console.log(`Number of items in the cart: ${cartItems}`);
    
    // Target the remove button of the specific item by index
    const removeButton = this.page.locator('.cart_item').nth(index).locator('button');
    await removeButton.waitFor({ state: 'visible', timeout: 30000 });
    await removeButton.click();
  }
  
  

  async checkout() {
    await this.page.click('#checkout');
  }
}
