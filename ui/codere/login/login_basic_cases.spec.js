const { test, expect } = require('@playwright/test');
const LandingPage = require('../landing/landing.page');
const LoginComponent = require('./login.component');

test.describe('Login Page - Basic cases', () => {

  let landing;
  test.beforeEach(async ({ page }, testInfo) => {
    landing = new LandingPage(page);
    await landing.navigate();
  });

  test('cookies banner is hidden', async ({ page }) => {
    await expect(landing.cookiesPanel).toBeHidden();
  });

  test('smoke test for login errors and closing the dialogs @smoke', async ({ page }) => {
    const login = new LoginComponent(page);
    await landing.loginButton.click();
    await login.attemptLogin('incorrect_user', 'incorrect_password');

    await login.loginErrorMessage.click();
    await login.okButton.click();
    await login.closeButton.click();
  });

  // Known Issue: Pending to have a valid user and password combination
  test('Attempt to login with correct username and password combination', async ({ page }) => {
    const login = new LoginComponent(page);
    await landing.loginButton.click();
    await login.attemptLogin('testcaes22', 'Vale2015');

    // expect the user to be logged in
    await expect(login.successfulLoginMessage).toBeVisible();
  });

  // Known Issue: Pending to have a valid email and password combination
  test('Attempt to login with correct email and password combination', async ({ page }) => {
    const login = new LoginComponent(page);
    await landing.loginButton.click();
    await login.attemptLogin('valid@email.com', 'Vale2015');

    // expect the user to be logged in
    await expect(login.successfulLoginMessage).toBeVisible();
  });


});


