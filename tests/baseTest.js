const { test } = require('@playwright/test');
const PageManager = require('../pageObject/manager/pageManager');
const {readFileSync} = require("node:fs");
const testData = JSON.parse(readFileSync(`./pageObject//testData/data.json`, `utf-8`));

class BaseTest {
    static pageManager;

    static beforeEachTests() {
        test.beforeEach(async ({ page }) => {
            console.log('Запуск beforeEach');
            BaseTest.pageManager = new PageManager(page);
            await BaseTest.pageManager.getLoginPage().navigate(testData.sauceURL);
        });
    }

    static afterEachTests() {
        test.afterEach(async () => {
            console.log('Запуск afterEach');

        });
    }
}

module.exports = BaseTest;