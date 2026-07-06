const { test, expect } = require("@playwright/test");

test .only("First Playwright Test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title()); 

    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const singIn = page.locator("#signInBtn");
    const title = page.locator("..card-body a");
    await userName.type("rahulshettyacademy");
    await password.type("learning");
    await singIn.click();

  
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("learning");
    await userName.fill("");
    await password.fill("");
    await userName.fill("rahulshettyacademy");
    password.fill("Learning@830$3mK2");
    await singIn.click();
    
    // Ekhanei bujha jacche je [] return korte playwright oi fuycntion build
    // console.log(await page.locator(".card-body a").nth(0). textContent());
    console.log(await page.locator(".card-body a").allTextContents());
    











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