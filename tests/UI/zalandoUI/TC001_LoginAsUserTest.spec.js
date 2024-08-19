const { test, expect } = require('@playwright/test');
const BaseTest = require('../../baseTest');

BaseTest.beforeEachTests();

test('Can login in sauceDemo', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().logAsUserInZalando();

});