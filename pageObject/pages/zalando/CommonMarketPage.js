const BasePage = require("../BasePage");


class CommonMarketPage extends BasePage {
    constructor(page) {
        super(page);
    }


    Buttons = {
    addToCartButton: "[data-testid=\"pdp-add-to-cart\"]" // После выбора размера кликаем
    }

    Tricks = {
        luboiPredmetVCataloge: "[data-zalon-partner-target=\"true\"] img", // Это коллекция, но лучше тыкнуть на 1 элемент и все
        sizePickerContainer: "[data-testid=\"pdp-size-picker-trigger\"]",
        sizePicker: "[data-testid=\"pdp-stockAvailable-label-label\"]", // Там их 4 вида, тоже пикаем первую
        miniCartHeader: "[data-testid=\"mini-cart-header\"]", // Появляется после добавления товара в корзину типа всплывашки

    }

    async peakFirstItemIntoCart(){
        await this.click(this.Tricks.luboiPredmetVCataloge);
        await this.waitForSelector(this.Tricks.sizePickerContainer).then(() => this.click(this.Tricks.sizePickerContainer));
        await this.waitForSelector(this.Tricks.sizePicker).then(() => this.click(this.Tricks.sizePicker));
        await this.waitForSelector(this.Buttons.addToCartButton).then(() => this.click(this.Buttons.addToCartButton));
    }
    async isMiniCartHeaderVisible(){
        await this.isVisible(this.Tricks.miniCartHeader);
    }





}
module.exports = CommonMarketPage;

