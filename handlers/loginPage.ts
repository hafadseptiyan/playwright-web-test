import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.type('#user-name', username, { delay: 75 });
    await this.page.type('#password', password, { delay: 75 });
    await this.page.click('#login-button');
  }

  async loginAssertions() {
    const inventoryList = this.page.locator('.inventory_list');

    await this.page.waitForSelector('.inventory_list');
    await expect(inventoryList).toBeVisible();
  }
}
