const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();

test('Checking if the cart opened and shows correctly', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickUnderwearClothesLink();
    const firstCount = await pageManager.getZalandoBucketPage().getItemAmountFromWidget();

    await pageManager.getCommonMarketPage().peakFirstItemIntoCart();
    await pageManager.getCommonMarketPage().isMiniCartHeaderVisible();

    const secondCount = await pageManager.getZalandoBucketPage().getItemAmountFromWidget();

    await expect(secondCount).toBe(firstCount);
});