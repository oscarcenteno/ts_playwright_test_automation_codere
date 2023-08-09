import { devices } from '@playwright/test';
// files for saving browser state
import path from 'path';
export const STORAGE_STATE_BEFORE = path.join(__dirname, '.auth/before-state.json');
export const STORAGE_STATE = path.join(__dirname, '.auth/state.json');

// variables for projects

const storageState = STORAGE_STATE;
const testIgnore = ['**/*global.setup.spec.js'];
let dependencies = [];
if (process.env.CI) {
    // for CI runs,  setup is precondition for all projects
    // we do not want this in dev since it'd make any test run setup before'
    dependencies = ['setup'];
}

const projects = [
    {
        name: 'setup',
        testMatch: /global.setup.spec.js/,
    },
    {
        name: 'chromium',
        use: {
            ...devices['Desktop Chrome'],
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },

    {
        name: 'Firefox',
        use: {
            ...devices['Desktop Firefox'],
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },

    {
        name: 'webkit',
        use: {
            ...devices['Desktop Safari'],
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },

    /* Test against mobile viewports. */
    {
        name: 'Mobile Chrome',
        use: {
            ...devices['Pixel 5'],
            storageState: storageState,
        },
        // dependencies: dependencies,
        testIgnore: testIgnore
    },
    {
        name: 'Mobile Safari (iPhone 13)',
        use: {
            ...devices['iPhone 13'],
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },
    {
        name: 'Mobile Safari (iPhone 13 Pro)',
        use: {
            ...devices['iPhone 13 Pro'],
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },

    /* Test against branded browsers. */
    {
        name: 'Microsoft Edge',
        use: {
            ...devices['Desktop Edge'], channel: 'msedge',
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },
    {
        name: 'Google Chrome',
        use: {
            ...devices['Desktop Chrome'], channel: 'chrome',
            storageState: storageState,
        },
        dependencies: dependencies,
        testIgnore: testIgnore
    },
];

export default projects;
