class DashboardPageObj
{
    constructor(page)
    {
        this.page=page;
       this.products=page.locator(".card-body b");
       this.producttext=page.locator(".card-body b");
       this.cart=page.locator("[routerlink*='cart']")   ;
    }
   

    async searchProduct(productName)
    {
        //await this.products.first().waitFor();
        const titles = await this.producttext.allTextContents();
        console.log(titles); 
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
           if ((await this.products.nth(i).textContent()).trim() === productName) {

                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        //pause window
    }
    async navigateToCart()
    {
        await this.cart.click();
    }
}
module.exports = { DashboardPageObj };