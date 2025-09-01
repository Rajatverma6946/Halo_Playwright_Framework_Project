const { LoginPageObj } = require('../PageObject/LoginPageObj');
const { DashboardPageObj } = require('../PageObject/DashboardPageObj');



class PageObjManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPageObj(page);
        this.dashboardPage = new DashboardPageObj(page);
    }
    getLoginpage() {
        return this.loginpage;
    }
    getDashboardPage() {
        return this.dashboardPage;
    }
}
module.exports = { PageObjManager };