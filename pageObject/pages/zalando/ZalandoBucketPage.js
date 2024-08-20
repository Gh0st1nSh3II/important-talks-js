const BasePage = require("../BasePage");


class ZalandoBucketPage extends BasePage{
    constructor(page) {
        super(page);
    }

    Labels = {
     cartContainer: "[data-id=\"cart-fragment-container\"]",
     cartItemCounter: "[data-testid=\"shopping-bag-badge\"] span"
    }




    async getItemAmount(){
        await this.getNumberFromElement(this.Labels.cartItemCounter);
    }



}

module.exports = ZalandoBucketPage;