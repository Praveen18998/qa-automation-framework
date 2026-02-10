import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { TestData } from '../utils/TestData';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(TestData.validUser.username, TestData.validUser.password);
    
    const productsPage = new ProductsPage(page);
    await expect(page).toHaveURL(/.*inventory.html/);
    
    const title = await productsPage.getPageTitle();
    expect(title).toBe('Products');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await loginPage.login(TestData.invalidUser.username, TestData.invalidUser.password);
    
    const isErrorVisible = await loginPage.isErrorDisplayed();
    expect(isErrorVisible).toBeTruthy();
    
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Username and password do not match');
  });

  test('should show error for locked out user', async ({ page }) => {
    await loginPage.login(TestData.lockedUser.username, TestData.lockedUser.password);
    
    const isErrorVisible = await loginPage.isErrorDisplayed();
    expect(isErrorVisible).toBeTruthy();
    
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Sorry, this user has been locked out');
  });
});
