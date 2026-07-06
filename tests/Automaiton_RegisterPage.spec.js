const {test, expect} = require("@playwright/test");

test("RegistrationPageAutomation", async ({browser}) => {

    const RegisterPageURL = "https://rahulshettyacademy.com/client/#/auth/register"
    const firstName = "#firstName"
    const lastName = "#lastName"
    const email = "#userEmail"
    const phoneNumber = "#userMobile"
    const password = "#userPassword"
    const confirmPassword = "#confirmPassword"

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(RegisterPageURL);

    console.log(await page.locator(".login-title").textContent())

    await page.locator(firstName).type("Akmam")
    await page.locator(lastName).type("Nirjhor")
    await page.locator(email).type("an@gmail.com")
    await page.locator(phoneNumber).type("01700000000")
    await page.locator("//select[@formcontrolname='occupation']//option[text()='Engineer']").click()
    await page.locator("input[formcontrolname='gender'][value='Male']").click()
    await page.locator(password).type("Learning@830$3mK2")
    await page.locator(confirmPassword).type("Learning@830$3mK2")

    await page.locator("input[type='submit']").click()
})
