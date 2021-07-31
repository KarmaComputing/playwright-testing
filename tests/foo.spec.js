const { test, expect } = require('@playwright/test');

//two test example
test.describe("tests:", () => {
  test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
    await page.goto('https://subscriptionwebsitebuilder.co.uk/');
    const name = await page.innerText('.navbar-brand');
    expect(name).toBe('Subscribie');
    await page.isVisible('.tawk-text-truncate');
    await page.isVisible('.tawk-icon-right');
    await new Promise(x => setTimeout(x, 1000));
    expect(await page.screenshot()).toMatchSnapshot('subscribie.png');
  });

  test("navigating to footballclub", async ({ page }) => {
    await page.goto('https://footballclub.subscriby.shop/');
    const name = await page.innerText('.title-1');
    expect(name).toBe('Football Club');
    expect(await page.screenshot()).toMatchSnapshot('football-subscribie.png');
  });

  test("navigating to herbivorehacker", async ({ page }) => {
    await page.goto('https://herbivorehacker.subscriby.shop/');
    const name = await page.innerText('.title-1');
    expect(name).toBe('Herbivore Hacker');
    expect(await page.screenshot()).toMatchSnapshot('herbivore-subscribie.png');
  });

});

