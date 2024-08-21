const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is searchbar work correctly", async () => {
    const pageManager = BaseTest.pageManager;

    const req = "Nike Sportswear High-top trainers";

    await pageManager.getZalandoMainPage().enterSomeDataToSerachBar(req);

    await pageManager.getZalandoMainPage().isSomeShoesNamesIncludeMyAsk(req);

});