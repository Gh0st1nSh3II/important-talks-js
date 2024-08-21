const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is home page banners work correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickAboutUsBanner();

});