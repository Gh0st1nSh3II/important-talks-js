const BasePage = require("../BasePage");


class ZalandoBucketPage extends BasePage{
    constructor(page) {
        super(page);
    }

    Labels = {
     mainCartContainerCss: "[data-id=\"cart-fragment-container\"]",
     cartItemCounterCss: "[data-testid=\"shopping-bag-badge\"] span",
     cartItemContainerDunkLowBPCss: "#article-e1e6aa61-5f1f-11ef-aacd-e751ed0fad07",
     cartPaymentMethodsContainerCss: ".cart-fragment__paymentMethods__container",
     totalPriceForItemsCss: "[data-id=\"subtotal\"] span[component=\"dd\"]", // Надо регекс чтобы zl убрать, не забудь сделать
     priceForOneItemCss: ".z-coast-base__article-price", // Здесь итератор надо чтобы сумму всех вещей взять

    }
    Buttons = {
        deleteItemFromCartCss: "[data-id=\"article-remove\"]",
        proceedToPayBtnCss: "[data-id=\"proceed-to-checkout-button\"]"
    }
    Links = {
        myNikeShoesInCartCss: ".z-coast-base__article__details [href*=\"nike-sportswear\"]",
    }

    async isPaymentMethodsContainerVisible(){
        await this.isVisible(this.Labels.cartPaymentMethodsContainerCss);
    }
    async isNikeShoesPresent(){
        await this.isElementPresent(this.Links.myNikeShoesInCartCss);
    }

    async getItemAmountFromWidget(){
        await this.getNumberFromElement(this.Labels.cartItemCounterCss.textContent().replaceAll(/[a-z]/gi, ''));
    }
    async getEachPriceOfItem(){
        let finishValue;
        const elements = await this.getNumberFromElement(this.Labels.priceForOneItemCss.textContent.replaceAll(/[a-z]/gi, ''));
        for (const element of elements) {
            finishValue += element;
        }
        return finishValue;
    }



}

module.exports = ZalandoBucketPage;