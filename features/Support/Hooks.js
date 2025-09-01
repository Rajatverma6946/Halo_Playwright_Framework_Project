const playwright= require('playwright');
const {Before,After, AfterStep,Status}=require('@cucumber/cucumber');
const { PageObjManager } = require('../Manager/PageObjManager');


Before(async function()
{
// to run in headed mode need to set headless: false
   const browser = await playwright.chromium.launch({ headless: false });
 // const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
   this.page = await context.newPage();
  this.POManager = new PageObjManager(this.page);

});
After(function()
{
    console.log("After method");
});

AfterStep(async function ({ result }) {
  if (result?.status === Status.FAILED) {  //  Use 'Status' not 'status'
    await this.page.screenshot({ path: 'screenshot.png' });
    console.log('📸 Screenshot taken and saved as screenshot.png');
  }
});


