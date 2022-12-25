import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('google', async ({ page }) => {
  await page.goto('https://google.com/');
});

test('facebook', async ({ page }) => {
  await page.goto('https://facebook.com/');
});

test('outlook', async ({ page }) => {
  await page.goto('https://outlook.com/');
});

test('github', async ({ page }) => {
  await page.goto('https://github.com/');
});

test('amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com');
});

test('apple', async ({ page }) => {
  await page.goto('https://apple.com');
});

test('merriam-webster', async ({ page }) => {
  await page.goto('https://merriam-webster.com');
});
