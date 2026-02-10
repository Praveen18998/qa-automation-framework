import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private pageTitle: Locator;
  private shoppingCart: Locator;
  private addToCartButtons: Locator;
  private productItems: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.productItems = page.locator('.inventory_item');
  }

  async getPageTitle(): Promise<string> {
    return await this.pageTitle.textContent() || '';
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async getProductCount(): Promise<number> {
    return await this.productItems.count();
  }

  async getCartBadgeCount(): Promise<string> {
    const badge = this.page.locator('.shopping_cart_badge');
    return await badge.textContent() || '0';
  }
}
