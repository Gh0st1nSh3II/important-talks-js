const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();

test('Login in Zalando as invalid user with incorrect password', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

});