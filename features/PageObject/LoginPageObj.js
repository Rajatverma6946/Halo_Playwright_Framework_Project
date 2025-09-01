class LoginPageObj {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
        this.fbusername = page.locator('#email');
        this.fbpassword = page.locator('#pass');

    }
    async validlogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
          await this.page.waitForLoadState('networkidle');
    }
    async openURL() {
        // if (!URL || typeof URL !== 'string') {
        //     throw new Error('A valid URL string must be provided to openURL');
        // }
        await this.page.goto('https://rahulshettyacademy.com/client');
    }
    async openFacebookURL()
    {
        await this.page.goto('https://www.facebook.com/');
    }
    async enterUsernamePassword(fbusername, fbpassword)
    {
        await this.fbusername.fill(fbusername);
        await this.fbpassword.fill(fbpassword);
    }
}

// export the class so that we can use in other files
module.exports = { LoginPageObj };