const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();


test('Checking is the choosing delivery type work correctly', async ({ page }) => {
    const pageManager = BaseTest.pageManager;


});