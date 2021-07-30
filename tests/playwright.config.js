// playwright.config.js
// @ts-check
const { chromium, devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 1000,
    },
    video:"on",
    },
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
      },
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
};

module.exports = config;
