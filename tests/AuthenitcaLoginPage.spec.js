const {test, expect} = require("@playwright/test");

test("AuthenticationLoginPage", async ({browser}) => {

    const LoginPageURL = "https://rahulshettyacademy.com/client/#/auth/login"
    const email = "#userEmail"
    const password = "#userPassword"

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(LoginPageURL);
   



    console.log(await page.locator(".login-title").textContent())

    await page.locator(email).type("akmamnirjhor47@gmail.com")
    await page.locator(password).type("1qazZAQ!")

    await page.locator("input[type='submit']").click()

    const productName = page.locator(".card-body")
    await productName.first().waitFor();

    await page.waitForTimeout(4000);

    const count = await productName.count()
    const cartButton = page.locator("[routerlink*='cart']");
    console.log(count);
    for (let i = 0; i< count; i++){

        const title = (await productName.nth(i).locator("b").textContent()).trim();
        if(title.toLowerCase() === "zara coat 3"){
            await productName.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await cartButton.click();

    await page.locator("div li").first().waitFor();

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    console.log(await page.locator("h3:has-text('ZARA COAT 3')").textContent());




})
