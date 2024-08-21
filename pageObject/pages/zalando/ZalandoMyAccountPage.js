const BasePage = require('../BasePage');

class ZalandoMyAccountPage extends BasePage {
    constructor(page) {
        super(page);
    }

    Buttons = {
        myAccounButtonCss: "[data-testid=\"user-account-icon\"]",
        myAccountInfoBtn: "._2ZBgf [href=\"/myaccount/details\"]",
        changeSensitiveInfoBtnCss: "[aria-controls=\":Rkin58ap:\"]",
        changeMailInfoBtnCss: "[aria-controls=\":R52n58ap:\"]",
        changePasswordInfoBtnCss: "[aria-controls=\":R5in58ap:\"]"
    }

    Labels = {
        firstNameInSensInfoCss: "#firstName"
    }

    async clickMyAccounBtn(){
        await this.click(this.Buttons.myAccounButtonCss);
    }

    async clickMyAccountInfoBtn(){
        await this.waitForSelector(this.Buttons.myAccountInfoBtn).then(() => this.click(this.Buttons.myAccountInfoBtn));
    }

    async clickChangeSensitiveInfoBtn(){
        await this.waitForSelector(this.Buttons.changeSensitiveInfoBtnCss).then(() => this.click(this.Buttons.changeSensitiveInfoBtnCss));
    }

    async isPartOfMyUserDataVisible(){
        await this.isVisible(this.Labels.firstNameInSensInfoCss);
    }





















}

module.exports = ZalandoMyAccountPage;