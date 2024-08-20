const ZalandoMain = require("../pages/zalando/ZalandoHomePage");
const ZalandoMyAccountPage = require("../pages/zalando/ZalandoMyAccountPage");

class PageManager {
    constructor(page) {
        this.page = page;
    }

    getZalandoMainPage(){
        return new ZalandoMain(this.page);
    }
    getZalandoMyAccountPage(){
        return new ZalandoMyAccountPage(this.page);
    }

}

module.exports = PageManager;