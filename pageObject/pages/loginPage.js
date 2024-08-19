const BasePage = require('./basePage');
const {readFileSync} = require("node:fs");

const testData = JSON.parse(readFileSync(`./pageObject//testData/data.json`, `utf-8`));

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    Buttons = {
        loginBtn: '#login-button'
    }

    TextBoxes = {
        username: '#user-name',
        password: '#password',
    }

    async loginSauce() {
        await this.type(this.TextBoxes.username, testData.sauceStandardUser);
        await this.type(this.TextBoxes.username, testData.saucePassword);
        await this.click(this.Buttons.loginBtn);
    }
}

module.exports = LoginPage;