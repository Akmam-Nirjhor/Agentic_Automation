const { test, expect } = require("@playwright/test");

test .only("First Playwright Test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title()); 

    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");









    // Browser will stay open for 10 seconds
    await page.waitForTimeout(10000);
});

test ("Page Playwright Test", async ({ page }) => {
    await page.goto("https://google.com");

    await expect(page).toHaveTitle("Google")
    console.log(await page.title());




    // Browser will stay open for 10 seconds
    await page.waitForTimeout(10000);
});