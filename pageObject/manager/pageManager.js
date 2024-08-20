const ZalandoMain = require("../pages/zalando/zalandoMain");

class PageManager {
    constructor(page) {
        this.page = page;
    }

    getZalandoMainPage(){
        return new ZalandoMain(this.page);
    }

}

module.exports = PageManager;