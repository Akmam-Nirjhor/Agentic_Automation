const { test, expect } = require("@playwright/test");

test("LoginPageAutomation", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const name = page.locator("#username");
    const passwrd = page.locator("#password");
    const dropDown = page.locator("select.form-control");
    await dropDown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();

    const modalText = page.locator("#myModal .modal-body p");
    await expect(modalText).toBeVisible();
    console.log(await modalText.textContent());
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await name.fill("rahulshettyacademy");
    await passwrd.fill("Learning@830$3mK2");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await page.waitForTimeout(3000);

})