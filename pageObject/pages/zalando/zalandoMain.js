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
        searchBarInputCss: "#search-input-container input"
    }

    Labels = {
        errorIncorrectPasswordEventCss: "[data-validation=\"error\"]",
        userDataCompoonentCss: "[data-trckng-component=\"PrVPUP8p3hz_u1AnWw6Ap\"]",
        genderSelectorCss: "[aria-label=\"Start\"]",
        facebookLinkLabelCss: "[aria-label=\"Facebook\"]",
        instagramLinkLabelCss: "[aria-label=\"Instagram\"]",
        twitterLinkLabelCss: "[aria-label=\"Twitter\"]",
        pinterestLinkLabelCss: "[aria-label=\"Pinterest\"]"
    }

    Images = {
        logoMainCss: "#header-logo span"
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

    async isMainLogoVisisbleAtHomePage(){
        await this.isVisible(this.Images.logoMainCss);
    }
    async isSearchBarVisibleAtHomePage(){
        await this.isVisible(this.Input.searchBarInputCss);
    }
    async isGenderSelectorVisible(){
        await this.isVisible(this.Labels.genderSelectorCss);
    }

    async clickSocialLink(text) {
        const selector = `[aria-label="${text}"]`;
        await this.page.click(selector);
    }
    async isThatWiredPage(){
        await this.checkUrlContains("/zalando/");
    }
}

module.exports = ZalandoMain;