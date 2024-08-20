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

    Labels = {
        errorIncorrectPasswordEventCss: "[data-validation=\"error\"]",
        userDataCompoonentCss: "[data-trckng-component=\"PrVPUP8p3hz_u1AnWw6Ap\"]"
    }


    async logAsUserInZalando(userPassword){
        await this.click(this.Buttons.myAccountButtonCss);
        await this.click(this.Input.emailInputFieldCss);
        await this.type(this.Input.emailInputFieldCss, zalando.user.email);
        await this.click(this.Buttons.proceedMailBtnCss);
        await this.click(this.Input.passwordInputFieldCss);
        await this.type(this.Input.passwordInputFieldCss, userPassword);
        await this.click(this.Buttons.authorizeCompleteBtnCss);
    }

    async isValidUserLoggedIn(){
        await this.click(this.Buttons.myAccountButtonCss);
        await this.isVisible(this.Labels.userDataCompoonentCss);
    }
    async isErrorAfterEnteringIncorrectPasswordVisible() {
         await this.isVisible(this.Labels.errorIncorrectPasswordEventCss);
    }

}

module.exports = ZalandoMain;