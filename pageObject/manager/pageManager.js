const ZalandoMain = require("../pages/zalando/ZalandoHomePage");
const ZalandoMyAccountPage = require("../pages/zalando/ZalandoMyAccountPage");
const ZalandoBucketPage = require("../pages/zalando/ZalandoBucketPage");

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
    getZalandoBucketPage(){
        return new ZalandoBucketPage(this.page);
    }

}

module.exports = PageManager;