const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is social link work correctly Facebook", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Facebook");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is social link work correctly Instagram", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Instagram");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is social link work correctly Twitter", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Twitter");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});

test("Check is social link work correctly Pinterest", async () => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().clickSocialLink("Pinterest");

    await pageManager.getZalandoMainPage().isThatWiredPage();
});