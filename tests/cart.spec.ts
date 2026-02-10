import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { TestData } from '../utils/TestData';

test.describe('Shopping Cart Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    
    await page.goto('/');
    await loginPage.login(TestData.validUser.username, TestData.validUser.password);
  });

  test('should add multiple products to cart', async ({ page }) => {
    await productsPage.addFirstProductToCart();
    
    // Add second product
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    
    const cartCount = await productsPage.getCartBadgeCount();
    expect(cartCount).toBe('2');
  });

  test('should navigate to cart page', async ({ page }) => {
    await productsPage.addFirstProductToCart();
    await page.locator('.shopping_cart_link').click();
    
    await expect(page).toHaveURL(/.*cart.html/);
  });
});
