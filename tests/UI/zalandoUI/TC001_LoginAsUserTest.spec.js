const { test, expect } = require('@playwright/test');
const BaseTest = require('../../baseTest');
const {readFileSync} = require("node:fs");
let zalando = JSON.parse(readFileSync(`./pageObject/testData/zalandodata.json`, `utf-8`));

BaseTest.beforeEachTests();

test('Login in Zalando as valid user', async ({ page }) => {
    const pageManager = BaseTest.pageManager;

    await pageManager.getZalandoMainPage().logAsUserInZalando(zalando.user.password);

    await pageManager.getZalandoMainPage().isValidUserLoggedIn();
});

