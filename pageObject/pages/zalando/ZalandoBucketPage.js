const BasePage = require("../BasePage");


class ZalandoBucketPage extends BasePage{
    constructor(page) {
        super(page);
    }

    Labels = {
     cartContainer: "[data-id=\"cart-fragment-container\"]"
    }


}

module.exports = ZalandoBucketPage;