# ts_playwright_test_automation_codere

This test automation framework allows for the execution of tests using the Playwright framework. Tests can be run in parallel in multiple browsers, including running specific tests for mobile or desktop responsive pages. It allows for headed or headless modes.
Also, reports results to html report.
Visual Studio Code is recommended as development environment.

Supported browsers already configured:
- Desktop Chromium
- Desktop Firefox
- Desktop Safari
- Mobile Chrome (Pixel 5)
- Mobile Safari (iPhone 13)
- Mobile Safari (iPhone 13 Pro)
- Microsoft Edge
- Google Chrome

## Setup

1. Install npm packages

```bash
npm install
```

2. Setup dotEnv file: Sample .env file that can be used for development purpose.

``` .env
BASE_URL=https://www.codere.es
```

3. Setup browser state for tests to run faster on dev
```bash
npx playwright test --config=playwright.config.ts --project=setup --headed
```

## Test case management

Find the planned and implemented test cases at [login_tests.md](ui/codere/login_tests.md), including pass/fail current results and known defects or issues.


## Development

```bash
# Run tests that are not mobile-specific on Desktop Chrome
npx playwright test --project="Google Chrome" --headed --workers=4 --grep-invert="@mobile" --config=playwright.config.ts

# Run tests that are not desktop-specific on Mobile Chrome
npx playwright test --project="Google Chrome" --headed --workers=4 --grep-invert="@desktop" --config=playwright.config.ts


# show report
npx playwright show-report
```

## Reference for best practices with Playwright

https://playwright.dev/docs/best-practices
