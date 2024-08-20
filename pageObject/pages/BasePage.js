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

    async getCurrentUrl() {
        return await this.page.url();
    }

    // async checkPageTitle(expectedTitle) {
    //     await expect(this.page).toHaveTitle(expectedTitle);
    // }
    // async checkPageUrl(expectedUrl) {
    //     await expect(this.page).toHaveURL(expectedUrl);
    // }

    async uploadFile(inputSelector, filePath) {
        await this.page.setInputFiles(inputSelector, filePath);
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
    async isElementPresent(selector) {
        return await this.page.locator(selector).count() > 0;
    }
    async isVisible(selector) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    // async isElementVisible(selector) {
    //     return await this.page.locator(selector).isVisible();
    // }

    async isElementNotVisible(selector) {
        return !(await this.page.locator(selector).isVisible());
    }
    async verifyElementText(selector, expectedText) {
        const text = await this.page.locator(selector).innerText();
        if (!text.includes(expectedText)) {
            throw new Error(`Expected text "${expectedText}" not found in element "${selector}".`);
        }
    }
    async checkUrlContains(expectedText) {
        const url = await this.page.url();
        if (!url.includes(expectedText.ignoreCase)) {
            throw new Error(`Expected URL to contain "${expectedText}", but got "${url}"`);
        }
    }
    async checkPageDisplay() {
        const title = await this.page.title();
        expect(title).toContain('Zalando'); // Замените на нужный заголовок
    }
}

module.exports = BasePage;