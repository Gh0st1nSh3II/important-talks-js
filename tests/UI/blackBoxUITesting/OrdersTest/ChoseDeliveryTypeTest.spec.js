const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();


test('Checking is the choosing delivery type work correctly ADDRESS', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    await pageManager.getZalandoBucketPage().clickProceedToPayButton();

    await pageManager.getZalandoBucketPage().clickChangeDeliveryTypeButton();

    await pageManager.getZalandoBucketPage().clickAddressDeliveryOptionAndCheck()
});

test('Checking is the choosing delivery type work correctly POSTOMAT', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    await pageManager.getZalandoBucketPage().clickProceedToPayButton();

    await pageManager.getZalandoBucketPage().clickChangeDeliveryTypeButton();

    await pageManager.getZalandoBucketPage().clickPostomatDeliveryOptionAndCheck();

    await pageManager.getZalandoBucketPage().enterSimpleInfoForPostomat();

    await pageManager.getZalandoBucketPage().isBydgoskaStrasseOptionButtonVisible();

});