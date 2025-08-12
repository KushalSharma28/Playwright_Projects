import { test, expect } from '@playwright/test';

test.describe('Automation Practice Test Suite', () => {
  test('Automation Practice Test Case', async ({ page }) => {
    // Check boxes
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Checkbox operations
    const option1 = page.locator('#checkBoxOption1');
    await option1.check();
    await expect(option1).toBeChecked();
    await expect(option1).toHaveValue('option1');
    await option1.uncheck();
    await expect(option1).not.toBeChecked();
    await page.locator('input[type="checkbox"]').filter({ hasText: 'Option2' }).check();
    await page.locator('input[type="checkbox"]').filter({ hasText: 'Option3' }).check();

    // Static dropdown
    const dropdown = page.locator('select');
    await dropdown.selectOption('option2');
    await expect(dropdown).toHaveValue('option2'); // Fixed the expected value to match the selected option

    // Dynamic dropdown
    await page.locator('#autocomplete').fill('ind');
    const options = await page.locator('.ui-menu-item div').all();
    for (const option of options) {
      if (await option.textContent() === 'India') {
        await option.click();
        break;
      }
    }

    // Autocomplete assertion
    await expect(page.locator('#autocomplete')).toHaveValue('India');

    // Visibility tests
    const displayedText = page.locator('#displayed-text');
    await expect(displayedText).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(displayedText).toBeHidden();

    // Radio buttons
    const radio2 = page.locator('[value="radio2"]');
    await radio2.check();
    await expect(radio2).toBeChecked();
  });
});