const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");
const pagemanager = require("../../../../pageObject/manager/pageManager");

BaseTest.beforeEachViaLogin();

test('Checking if the cart opened and shows correctly', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    const beforeDelete = await pageManager.getZalandoBucketPage().getItemAmountFromWidget();

    await pageManager.getZalandoBucketPage().removeMyNikesFromCart();

    const afterDelete = await pageManager.getZalandoBucketPage().getItemAmountFromWidget();
    await expect(beforeDelete > afterDelete);

    await pageManager.getZalandoBucketPage().undoRemoveMyNikeShoesFromcart();
});