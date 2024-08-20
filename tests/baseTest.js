const { test } = require('@playwright/test');
const PageManager = require('../pageObject/manager/pageManager');
const {readFileSync} = require("node:fs");


const zalandoBaseTestData = JSON.parse(readFileSync(`./pageObject//testData/zalandodata.json`, `utf-8`));

// Нада 25 е2е и 3 апи
// Посмотреть как сщделать индивидуальный хук для 1 теста

class BaseTest {
    static pageManager;

    static beforeEachTests() {
        test.beforeEach(async ({ page }) => {
            console.log('BeforeEach start');
            BaseTest.pageManager = new PageManager(page);
            await BaseTest.pageManager.getZalandoMainPage().navigate(zalandoBaseTestData.mainPageLink);
        });
    }

    static beforeEachViaLogin() {
        test.beforeEach(async ({ page }) => {
            console.log('BeforeEach start');
            BaseTest.pageManager = new PageManager(page);
            await BaseTest.pageManager.getZalandoMainPage().navigate(zalandoBaseTestData.mainPageLink);
            await BaseTest.pageManager.getZalandoMainPage().logAsUserInZalando(zalandoBaseTestData.user.password);
        });
    }

    static afterEachTests() {
        test.afterEach(async () => {
            console.log('AfterEach start');

        });
    }
}

module.exports = BaseTest;