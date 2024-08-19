const { test } = require('@playwright/test');
const PageManager = require('../pageObject/manager/pageManager');



class BaseTest {
    static pageManager;

    static beforeEachTests() {
        test.beforeEach(async ({ page }) => {
            BaseTest.pageManager = new PageManager(page);
            await BaseTest.pageManager.getLoginPage().navigate('https://www.saucedemo.com/');
        });
    }

    static afterEachTests() {
        test.afterEach(async () => {
            console.log('Запуск afterEach');
            // Дополнительные действия после каждого теста
        });
    }
}

module.exports = BaseTest;