const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();


test('Checking if the orders options work correctly with invalid data', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    await pageManager.getZalandoBucketPage().clickProceedDataButton();

    await pageManager.getZalandoBucketPage().clickProceedDataButton();

    await pageManager.getZalandoBucketPage().isErrorIconViaEditPostDataVisible();

});