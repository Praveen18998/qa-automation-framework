import { Page } from '@playwright/test';

export class Helpers {
  static async takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  static async waitForTimeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static generateRandomEmail(): string {
    const timestamp = Date.now();
    return `test_${timestamp}@example.com`;
  }

  static generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
