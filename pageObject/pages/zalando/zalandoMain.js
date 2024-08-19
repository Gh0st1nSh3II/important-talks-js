const BasePage = require('../basePage');
const {readFileSync} = require("node:fs");

const zalando = JSON.parse(readFileSync(`./pageObject/testData/zalandodata.json`, `utf-8`));

class ZalandoMain extends BasePage{
    constructor(page) {
        super(page);
    }

    Buttons = {
    myAccountBtnByCss: "#header-user-account-icon button",
    signInLinkBtnCss: ".Wy3rmK button", //.userAccountContent  .Wy3rmK button тоже можно
    verifyEmailBtnCss: "[data-testid=\"verify-email-button\"]",
    signInBtnCss: "[data-testid=\"login-button\"]",
    signOutExpMenuBtnCss: "[href=\"/logout/\"]"
    }

    Input = {
        emailInputLabelCss: "#lookup-email",
        passwordInputLabelCss: "#login-password",
    }


    async logAsUserInZalando(){
        await this.click(this.Buttons.myAccountBtnByCss);
        await this.click(this.Buttons.signInBtnCss);
        await this.click(this.Input.emailInputLabelCss);
        await this.type(this.Input.emailInputLabelCss, zalando.user.email);
        await this.click(this.Buttons.verifyEmailBtnCss);
        await this.click(this.Input.passwordInputLabelCss);
        await this.type(this.Input.passwordInputLabelCss, zalando.user.password);
        await this.click(this.Buttons.signInBtnCss);
    }

}

module.exports = ZalandoMain;