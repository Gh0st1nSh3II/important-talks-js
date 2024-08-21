const { test, expect } = require('@playwright/test');
const BaseTest = require("../../../baseTest");

BaseTest.beforeEachTests();

test("Check is home page load correctly", async () => {
    const pageManager = BaseTest.pageManager;



});