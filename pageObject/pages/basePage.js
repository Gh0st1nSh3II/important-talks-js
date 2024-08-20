const {expect} = require("@playwright/test");

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.fill(selector, text);
    }

    async isVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

}

module.exports = BasePage;