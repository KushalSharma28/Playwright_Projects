const { test, expect } = require('@playwright/test');

test.describe('My First Test Suite', () => {
    test('My First Test Case', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
        await page.locator('.search-keyword').type('ca');
        await page.waitForTimeout(1000); // Playwright uses waitForTimeout for static waits

        // Playwright assertions are generally more direct
        await expect(page.locator('.product')).toHaveCount(5);
        await expect(page.locator('.product:visible')).toHaveCount(4);
        await expect(page.locator('.products').locator('.product')).toHaveCount(4);

        // Click the third product's add to cart button
        await page.locator(':nth-child(3) > .product-action > button').click();

        // Find the third product and click its "ADD TO CART" button
        await page.locator('.products').locator('.product').nth(2).locator('text=ADD TO CART').click();

        // Iterating through elements
        const products = await page.locator('.products .product').all();
        for (const product of products) {
            const textVeg = await product.locator('.h4.product-name').textContent();
            if (textVeg.includes('Cashews')) {
                await product.locator('button').click();
                break; // Assuming you only want to click the first "Cashews" found
            }
        }

        await page.locator('.cart-icon > img').click();
        await page.locator('text=PROCEED TO CHECKOUT').click();
        await page.locator('text=Place Order').click();

        await page.locator('select').selectOption('India');
        await page.locator('.chkAgree').check();
        await page.locator('button:has-text("Proceed")').click();

        // Duplicate actions in original code, keeping them as is for direct conversion
        await page.locator('select').selectOption('India');
        await page.locator('.chkAgree').check();
        await page.locator('button:has-text("Proceed")').click();

        // The commented-out Cypress code for getting text content would look like this in Playwright:
        // const logoText = await page.locator('.brand').textContent();
        // console.log(logoText);
    });
});