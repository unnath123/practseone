import {test, expect} from '@playwright/test'

test("locators", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await  page.locator("id=input-firstname").fill("Unnath");

    await  page.fill("#input-lastname", "Gowda");

    const formEles = await page.$$(".form-group")

    console.log(formEles.length)

    await page.getByRole('link', { name:'sign up'}).fill("unnathvarshi@gmail.com");
    

    await  page.waitForTimeout(3000);
})

// npx playwright test --project=chromium --headed