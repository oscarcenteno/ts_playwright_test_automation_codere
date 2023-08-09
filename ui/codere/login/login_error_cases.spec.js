const { test, expect } = require('@playwright/test');
const LandingPage = require('../landing/landing.page');
const LoginComponent = require('./login.component');

test.describe('Login Page - Error cases', () => {

  let landing;
  test.beforeEach(async ({ page }, testInfo) => {
    landing = new LandingPage(page);
    await landing.navigate();
  });

  const scenarios = [
    {
      title: 'Attempt to login with correct username but incorrect password',
      username: 'testcaes22',
      password: '12345678',

    },
    {
      title: 'Attempt to login with correct email but incorrect password',
      username: 'valid@email.com',
      password: '12345678',

    },
    {
      title: 'Attempt to login with non existent username',
      username: 'non_existent_username',
      password: '12345678',

    },
    {
      title: 'Attempt to login with non existent email',
      username: 'non_existent@email.com',
      password: '12345678',
    }
  ]

  scenarios.forEach(scenario => {
    test(`login error cases - ${scenario.title}`, async ({ page }) => {
      const login = new LoginComponent(page);
      await landing.loginButton.click();
      await login.attemptLogin(scenario.username, scenario.password);

      await expect(login.loginErrorMessage).toBeVisible();
    });

  });
});


