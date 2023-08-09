const { test, expect } = require('@playwright/test');
const LandingPage = require('../landing/landing.page');
const LoginComponent = require('./login.component');

test.describe('Login Page - Error cases about required fields', () => {

  let landing;
  test.beforeEach(async ({ page }, testInfo) => {
    landing = new LandingPage(page);
    await landing.navigate();
  });

  const scenarios = [
    {
      title: 'Attempt to login with no data',
      username: '',
      password: '',

    },
    {
      title: 'Attempt to login with any username, and no password.',
      username: 'valid@email.com',
      password: '',

    },
    {
      title: 'Attempt to login with no username, and any password.',
      username: '',
      password: '12345678',

    },
  ]

  scenarios.forEach(scenario => {
    test(`login error cases - ${scenario.title}`, async ({ page }) => {
      const login = new LoginComponent(page);
      await landing.loginButton.click();
      await login.attemptLogin('', '');

      await expect(login.requiredFieldsMessage).toBeVisible();
    });

  });
});


