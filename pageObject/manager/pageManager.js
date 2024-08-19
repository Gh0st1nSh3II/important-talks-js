const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');

class PageManager {
    constructor(page) {
        this.page = page;
    }

    getHomePage() {
        return new HomePage(this.page);
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }
}

module.exports = PageManager;