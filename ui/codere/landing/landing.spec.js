const { test, expect } = require('@playwright/test');
const LandingPage = require('./landing.page');

test.describe('Codere Landing Page', () => {

  let landing;
  test.beforeEach(async ({ page }, testInfo) => {
    landing = new LandingPage(page);
    await landing.navigate();
  });

  test('cookies banner is hidden when loading pages after setup', async ({ page }) => {
    await expect(landing.cookiesPanel).toBeHidden();
  });

});
