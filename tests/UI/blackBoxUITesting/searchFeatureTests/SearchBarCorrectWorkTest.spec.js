const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is search bar work correctly with guilty things JS SCRIPT", async () => {
    const pageManager = BaseTest.pageManager;

    const jsScript = "<script>alert(1)</script>"
    await pageManager.getZalandoMainPage().enterSomeDataToSerachBar(jsScript);

    await pageManager.getZalandoMainPage().isErrorAtInjectionPageVisible();

});

test("Check is search bar work correctly with guilty things SQL INJ", async () => {
    const pageManager = BaseTest.pageManager;

    const sqlIjection = "' OR 1=1"
    await pageManager.getZalandoMainPage().enterSomeDataToSerachBar(sqlIjection);

    await pageManager.getZalandoMainPage().isErrorAtInjectionPageVisible();

});