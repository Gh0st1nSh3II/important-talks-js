const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is home page load correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Facebook");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is home page 2load correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Instagram");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is home page 3load correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Twitter");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is home page l4oad correctly", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Pinterest");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});