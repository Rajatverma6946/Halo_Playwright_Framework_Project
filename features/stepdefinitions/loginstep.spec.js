const { When, Then, Given } = require('@cucumber/cucumber')
const { PageObjManager } = require('../Manager/PageObjManager')
const { expect } = require('@playwright/test');

const {playwright} = require('playwright');
const dataset = require('../ExternalResource/PlaceOrderDataSet.json');


Given('a login to Ecommerce application with {string} and {string}', {timeout : 100*1000}, async function (username, password) {

  const loginpage = this.POManager.getLoginpage();
  await loginpage.openURL();
  await loginpage.validlogin(username, password);
  //on the below code we are explicitly failing the test to see if the hooks are working taking the screenshot or not
  // await expect(true).toBe(false);

  
});

When('Add {string} to cart', async function (productname)  {
  const dashboardPage = this.POManager.getDashboardPage();
  await dashboardPage.searchProduct(productname);
  await dashboardPage.navigateToCart();
  
});

   Given('a login to Facebook application with {string} and {string}',async function (fbusername, fbpassword) {
     const loginpage = this.POManager.getLoginpage();

    await loginpage.openFacebookURL();
   await loginpage.enterUsernamePassword(fbusername, fbpassword);
         });










