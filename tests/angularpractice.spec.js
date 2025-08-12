import { test, expect } from '@playwright/test';

test.describe('Angular Practice Test Suite', () => {
  let testData: any;

  test.beforeAll(async () => {
    // Load test data from fixture file
    testData = JSON.parse(require('fs').readFileSync('./fixtures/example.json', 'utf8'));
  });

  test('Angular Practice Test Case', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    
    // Fill form fields
    await page.locator('input[name="name"]:nth-child(2)').fill(testData.data);
    await page.locator('select').selectOption(testData.gender);
    
    // Assertions
    await expect(page.locator(':nth-child(4) > .ng-untouched')).toHaveValue(testData.name);
    await expect(page.locator('input[name="name"]:nth-child(2)')).toHaveAttribute('minlength', '2');
    await expect(page.locator('#inlineRadio3')).toBeDisabled();
    
    // Navigation and product selection
    await page.locator(':nth-child(2) > .nav-link').click();
    
    // Select product (equivalent to your custom command)
    const productTitles = await page.locator('h4.card-title').all();
    for (let i = 0; i < productTitles.length; i++) {
      const title = await productTitles[i].textContent();
      if (title?.includes('Blackberry')) {
        await page.locator('button.btn.btn-info').nth(i).click();
        break;
      }
    }
  });
});