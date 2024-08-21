const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is social link work correctly Facebook", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().enterSomeDataToSerachBar();

    await pageManager.getZalandoMainPage().isErrorAtInjectionPageVisible();

});