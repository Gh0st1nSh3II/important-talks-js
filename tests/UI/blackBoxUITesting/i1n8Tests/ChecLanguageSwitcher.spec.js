const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test('Checking if the language checker work correctly english', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().switchToEnglish();

    await pageManager.getZalandoMainPage().openLanguageSwitcherMenuAndCheckIsEnglishModeEnable();

});