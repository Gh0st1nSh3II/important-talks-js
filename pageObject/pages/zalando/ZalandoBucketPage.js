const BasePage = require("../BasePage");


class ZalandoBucketPage extends BasePage{
    constructor(page) {
        super(page);
    }

    Labels = {
     mainCartContainerCss: "[data-id=\"cart-fragment-container\"]",
     cartItemCounterCss: "[data-testid=\"shopping-bag-badge\"] span",
     cartItemContainerDunkLowBPCss: "#article-3a5ee874-5f2d-11ef-aa7d-b1f69d1a0f53", // Аккуратно, при удалении другой id
     cartPaymentMethodsContainerCss: ".cart-fragment__paymentMethods__container",
     totalPriceForItemsCss: "[data-id=\"subtotal\"] span[component=\"dd\"]", // Надо регекс чтобы zl убрать, не забудь сделать +
     priceForOneItemCss: ".z-coast-base__article-price", // Здесь итератор надо чтобы сумму всех вещей взять +
     addressInfoHeaderCss: ".z-coast-fjord_address_shippingAddressBook-header"
    }
    Buttons = {
        deleteItemFromCartCss: "[data-id=\"article-remove\"]",
        proceedToPayBtnCss: "[data-id=\"proceed-to-checkout-button\"]",
        undoDeleteActionBtnCss: ".z-coast-base__undo-action a",
        proceedPostData: "[data-id=\"button-save-address-book\"]",
        changeAreaButtonCss: ".button_touch-area",
        showPostomatAddressesButtonCss: ".vfoVrE",
        proceedBydgoscStrassePostomatButton: "[data-id=\"z-coast-fjord_selectPickupPoint-53.0132-18.56153\"]"
    }
    Links = {
        myNikeShoesInCartCss: ".z-coast-base__article__details [href*=\"nike-sportswear\"]",
    }

    Icons = {
        errorIcon: ".z-1-icon_svg",
        addressTypeButtonIcon: "#delivery-destination-tab-0",
        postomatTypeButtonIon: "#delivery-destination-tab-0"
    }

    Inputs = {
        streetAddressContainerCss: "#street-address",
        postCityCodeCss: " z-grid-item:nth-child(4) > div:nth-child(1) > label:nth-child(1) > div:nth-child(2) > input",
        cityNameCss: "z-grid-item:nth-child(6) > div:nth-child(1) > label:nth-child(1) > div:nth-child(2) > input"
    }

    async isBydgoskaStrasseOptionButtonVisible(){
        await this.isVisible(this.Buttons.proceedBydgoscStrassePostomatButton)
    }
    async clickPostomatDeliveryOptionAndCheck(){
        await this.click(this.Buttons.addressTypeButtonIcon);
        await this.isVisible(this.Inputs.postCityCodeCss);
    }

    async clickAddressDeliveryOptionAndCheck(){
        await this.click(this.Buttons.addressTypeButtonIcon);
        await this.isVisible(this.Inputs.streetAddressContainerCss);
    }
    async enterSimpleInfoForPostomat(){
        await this.type(this.Inputs.postCityCodeCss, "87-100");
        await this.type(this.Inputs.cityNameCss, "Torun");
        await this.click(this.Buttons.showPostomatAddressesButtonCss)
    }
    async clickChangeDeliveryTypeButton(){
        await this.click(this.Buttons.changeAreaButtonCss)
    }
    async isAddressHeaderVisibleAtOrderConfigForm(){
        await this.isVisible(this.Labels.addressInfoHeaderCss)
    }
    async isErrorIconViaEditPostDataVisible(){
        await this.isElementPresent(this.Icons.errorIcon)
    }
    async clickProceedToPayButton(){
        await this.click(this.Buttons.proceedToPayBtnCss)
    }

    async clickProceedDataButton(){
        await this.click(this.Buttons.proceedPostData)
    }
    async undoRemoveMyNikeShoesFromcart() {
        await this.waitForSelector(this.Buttons.undoDeleteActionBtnCss).then(() => this.click(this.Buttons.undoDeleteActionBtnCss));
    }
    async removeMyNikesFromCart(){
        await this.click(this.Labels.cartItemContainerDunkLowBPCss + this.Buttons.deleteItemFromCartCss);
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