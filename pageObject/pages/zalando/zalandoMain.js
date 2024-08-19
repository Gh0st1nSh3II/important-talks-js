const BasePage = require('../basePage');
const {readFileSync} = require("node:fs");
const {expect} = require("@playwright/test");

const zalando = JSON.parse(readFileSync(`./pageObject/testData/zalandodata.json`, `utf-8`));

class ZalandoMain extends BasePage{
    constructor(page) {
        super(page);
    }

    Buttons = {
    myAccountButtonCss: "#header-user-account-icon button",
    proceedMailBtnCss: "[data-testid=\"verify-email-button\"]",
    authorizeCompleteBtnCss: "[data-testid=\"login-button\"]",
    mySizesBtnXpath: "//*[@href=\"/your-sizes/\"]/parent::span"
    }

    Input = {
        emailInputFieldCss: "#lookup-email",
        passwordInputFieldCss: "#login-password",
    }


    async logAsUserInZalando(){
        await this.click(this.Buttons.myAccountButtonCss);
        await this.type(this.Input.emailInputFieldCss, zalando.user.email);
        await this.click(this.Buttons.proceedMailBtnCss);
        await this.type(this.Input.passwordInputFieldCss, zalando.user.password);
        await this.click(this.Buttons.authorizeCompleteBtnCss);
    }

    async isUserInZalando() {
        await this.hover(this.Buttons.myAccountButtonCss).then();
        return this.page.isVisible(this.Buttons.mySizesBtnXpath);

    }

}

module.exports = ZalandoMain;