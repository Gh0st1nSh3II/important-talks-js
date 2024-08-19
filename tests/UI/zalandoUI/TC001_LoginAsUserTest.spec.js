const { test, expect } = require('@playwright/test');
const BaseTest = require('../../baseTest');

BaseTest.beforeEachTests();

test('Login in Zalando as average user', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().logAsUserInZalando();

    await expect(pageManager.getZalandoMainPage.isUserInZalando()).toBe(true);
});