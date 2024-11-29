import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemByIndex(index: number) {
    await this.page.waitForTimeout(500); 
    await this.page.click(`.inventory_item:nth-child(${index + 1}) button`);
    await this.page.waitForTimeout(500);
  }

  async goToCart() {
    await this.page.waitForTimeout(500);
    await this.page.click('.shopping_cart_link');
    await this.page.waitForTimeout(500);
  }
}
