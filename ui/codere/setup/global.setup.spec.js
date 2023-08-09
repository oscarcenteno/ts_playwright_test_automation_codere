const { test, expect } = require('@playwright/test');
const { STORAGE_STATE_BEFORE, STORAGE_STATE } = require('../../../playwright/playwright.projects');
const LandingPage = require('../landing/landing.page');

test.describe('Global Setup', () => {

  // This test will pass only when executed in setup project
  test('cookies banner is shown when loading landing page first time', async ({ page }) => {
    const landing = new LandingPage(page);

    await landing.navigate();
    await expect(landing.cookiesPanel).toBeVisible();
    await page.context().storageState({ path: STORAGE_STATE_BEFORE });

    await landing.cookiesButton.click();
    await expect(landing.cookiesPanel).not.toBeVisible();

    await page.context().storageState({ path: STORAGE_STATE });
  });

})
