const { test, expect } = require('@playwright/test');

//two test example
test.describe('tests: ', () => {
  test("one", async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
  });

  test("two", async ({ page }) => {
  await page.goto('https://subscriptionwebsitebuilder.co.uk/');
  const name = await page.innerText('.navbar-brand');
  expect(name).toBe('Subscribie');
  });

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://footballclub.subscriby.shop/');
  });

});

