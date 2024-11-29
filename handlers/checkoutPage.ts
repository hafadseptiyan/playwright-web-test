import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.waitForTimeout(500); 
    await this.page.fill('#first-name', firstName);
    await this.page.waitForTimeout(500); 
    await this.page.fill('#last-name', lastName);
    await this.page.waitForTimeout(500); 
    await this.page.fill('#postal-code', postalCode);
    await this.page.waitForTimeout(500); 
  }

  async continue() {
    await this.page.waitForTimeout(500); 
    await this.page.click('#continue');
    await this.page.waitForTimeout(500); 
  }

  async finish() {
    await this.page.waitForTimeout(500); 
    await this.page.click('#finish');
    await this.page.waitForTimeout(500); 
  }

  async assertOrderCompletion() {
    const completeHeader = this.page.locator('.complete-header');
    await this.page.waitForSelector('.complete-header'); 
    await expect(completeHeader).toBeVisible();
  }
}
