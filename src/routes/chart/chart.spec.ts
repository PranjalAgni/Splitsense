import { test, expect } from '@playwright/test';

test.describe('Chart Page', () => {
	test('should load the chart page and display the chart canvas', async ({ page }) => {
		// Navigate to the chart page
		await page.goto('/chart');

		// Check if the page title is correct
		await expect(page).toHaveTitle('Monthly Expense Chart');

		// Check if the heading is present
		const heading = page.locator('h1');
		await expect(heading).toHaveText('Monthly Expense Analysis');

		// Check if the canvas element for the chart is present
		const canvas = page.locator('canvas');
		await expect(canvas).toBeVisible();
		await expect(canvas).toHaveCount(1); // Ensure there's exactly one canvas

		// Optional: Check if there's no error message initially
		const errorMessage = page.locator('.error-message');
		await expect(errorMessage).toHaveCount(0);
	});

	// TODO: Add a test case for when data loading fails, if possible to mock.
	// TODO: Add a test case to check if the chart actually renders bars,
	//       though this might be more complex and require visual regression or deeper canvas inspection.
});
