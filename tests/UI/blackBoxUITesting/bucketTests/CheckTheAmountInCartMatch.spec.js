const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();

test('Checking if the item count match in cart', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickCartButton();

    const widgetSumAmount = await pageManager.getZalandoBucketPage().getItemAmountFromWidget();

    const itemsSum = await pageManager.getZalandoBucketPage().getEachPriceOfItem();

    await expect(widgetSumAmount).toBe(itemsSum);
});