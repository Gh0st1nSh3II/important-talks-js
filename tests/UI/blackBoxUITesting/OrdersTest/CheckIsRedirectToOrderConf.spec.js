const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();

test('Checking if the order btn redirect to order options', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    await pageManager.getZalandoBucketPage().clickProceedToPayButton();

    await pageManager.getZalandoBucketPage().isAddressHeaderVisibleAtOrderConfigForm();

});