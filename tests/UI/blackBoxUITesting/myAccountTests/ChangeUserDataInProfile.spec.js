const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachViaLogin();

test("Check is social link work correctly Facebook", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickMyAccounBtn();

    await pageManager.getZalandoMyAccountPage().clickMyAccountInfoBtn();

    await pageManager.getZalandoMyAccountPage().clickChangeSensitiveInfoBtn();

    await pageManager.getZalandoMyAccountPage().isPartOfMyUserDataVisible();

});