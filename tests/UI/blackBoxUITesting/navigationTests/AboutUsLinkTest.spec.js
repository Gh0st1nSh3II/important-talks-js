const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is legal info page load correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickAboutUsBtn();

    await pageManager.getZalandoMainPage().isLegalCompanyInfoVisible();

});