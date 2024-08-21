const BasePage = require('../BasePage');
const {readFileSync} = require("node:fs");
const {expect} = require("@playwright/test");

const zalando = JSON.parse(readFileSync(`./pageObject/testData/zalandodata.json`, `utf-8`));

class ZalandoHomePage extends BasePage{
    constructor(page) {
        super(page);
    }

    Buttons = {
    myAccountButtonCss: "#header-user-account-icon button",
    proceedMailBtnCss: "[data-testid=\"verify-email-button\"]",
    authorizeCompleteBtnCss: "[data-testid=\"login-button\"]",
    mySizesBtnXpath: "//*[@href=\"/your-sizes/\"]/parent::span",
    cartButtonCss: "[data-testid=\"cart\"]",
    languageSwitcherBtnCss: "[data-testid=\"language-switcher\"]",
    languageSwitcherSaveButtonCss: "[data-testid=\"language-switcher-save-button\"]"
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
        facebookLinkLabelCss: "[aria-label=\"${text}\"]", // Twitter, Instagram, Pinterest,
        legalCompanyInfo: "x-wrapper-singlepage .cf-singlepage-legal"
    }

    Images = {
        logoMainCss: "#header-logo span",
        errorMsgWithXSSInjAtErrorPage: ".AGx8tI"
    }

    Links = {
        aboutCompanyLinkCss: "[href=\"/zalando-dane-firmy/\"]",
        redirectToUnderwearClothes: "[href=\"/bielizna-dziecieca/\"]",
        reloadButtonAtReloadPage: "[id=\"reload-button\"]"
    }

    Radiobuttons = {
        englishMode: "label[for=\"en-m\"]",
        polishMode: "label[for=\"pl-m\"]"
    }


    async isSomeShoesNamesIncludeMyAsk(req){
        await this.isElementPresent(req)
    }
    async switchToEnglish(){
        await this.click(this.Buttons.languageSwitcherBtnCss);
        await this.click(this.Radiobuttons.englishMode);
        await this.click(this.Buttons.languageSwitcherSaveButtonCss);
    }
    async openLanguageSwitcherMenuAndCheckIsEnglishModeEnable(){
        await this.click(this.Buttons.languageSwitcherBtnCss);
        expect(await this.Buttons.languageSwitcherSaveButtonCss.textContent).toEqual("Save")
    }
    async isErrorAtInjectionPageVisible(){
        await this.isVisible(this.Images.logoMainCss);
    }
    async enterSomeDataToSerachBar(text){
        await this.type(this.Input.searchBarInputCss, text);
    }
    async clickUnderwearClothesLink() {
        await this.click(this.Links.redirectToUnderwearClothes);
    }
    async clickCartButton(){
        await this.click(this.Buttons.myAccountButtonCss);
    }

    async logAsUserInZalando(userPassword){
        await this.click(this.Buttons.myAccountButtonCss);
        // await this.waitForSelector(this.Input.emailInputFieldCss);
        await this.click(this.Input.emailInputFieldCss);
        await this.type(this.Input.emailInputFieldCss, zalando.user.email);
        await this.click(this.Buttons.proceedMailBtnCss);
        // await this.waitForSelector(this.Input.passwordInputFieldCss);
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
    async isLegalCompanyInfoVisible(){
        await this.isVisible(this.Labels.legalCompanyInfo);
    }

    async clickSocialLink(text) {
        const selector = `[aria-label="${text}"]`;
        await this.page.click(selector);
    }
    async isThatWiredPage(){
        await this.checkUrlContains("/zalando/");
    }
    async clickAboutUsBtn(){
        await this.click(this.Links.aboutCompanyLinkCss);
    }
}

module.exports = ZalandoHomePage;