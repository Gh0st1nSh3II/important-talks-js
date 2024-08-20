const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();


test('Checking if the cart opened and shows correctly', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    await pageManager.getZalandoBucketPage().isPaymentMethodsContainerVisible();
    // I added the shoes originally to speed up the creation of validation tests
    await pageManager.getZalandoBucketPage().isNikeShoesPresent();
});