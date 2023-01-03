import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'parallel' });
test("fonts.googleapis.com", async ({ page }) => { await page.goto("https://fonts.googleapis.com"); });
test("facebook.com", async ({ page }) => { await page.goto("https://facebook.com"); });
test("twitter.com", async ({ page }) => { await page.goto("https://twitter.com"); });