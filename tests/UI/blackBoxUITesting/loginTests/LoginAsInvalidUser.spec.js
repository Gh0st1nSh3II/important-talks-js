const {test, expect} = require("@playwright/test");
const BaseTest = require("../../../baseTest");


BaseTest.beforeEachTests();

test('Login in Zalando as invalid user with incorrect password', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().logAsUserInZalando("Blafasasf12r");

    await pageManager.getZalandoMainPage().isErrorAfterEnteringIncorrectPasswordVisible();
});