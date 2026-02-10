import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { TestData } from '../utils/TestData';

test.describe('Products Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    
    await page.goto('/');
    await loginPage.login(TestData.validUser.username, TestData.validUser.password);
  });

  test('should display products after login', async () => {
    const productCount = await productsPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
  });

  test('should add product to cart', async () => {
    await productsPage.addFirstProductToCart();
    
    const cartCount = await productsPage.getCartBadgeCount();
    expect(cartCount).toBe('1');
  });

  test('should display correct page title', async () => {
    const title = await productsPage.getPageTitle();
    expect(title).toBe('Products');
  });
});
