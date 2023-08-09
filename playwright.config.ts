// playwright config for Development
import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

import projects from './playwright/playwright.projects';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 120 * 1000,
  testDir: 'ui',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: false,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', {
      /**
       * By default, HTML report is opened automatically if some of the tests failed.
       * The possible values for that property are 'always', 'never' and 'on-failure' (default).
       */
      open: 'never',
      /**
       * By default, report is written into the playwright-report folder
       * in the current working directory.
       */
      outputFolder: 'playwright-report'
    }
    ]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // Record trace only when retrying a test for the first time.
    trace: 'retain-on-failure',

    // Record video only when retrying a test for the first time.
    video: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: projects,

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
