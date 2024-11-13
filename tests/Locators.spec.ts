import { test, expect } from '@playwright/test'

test("locators", async ({ page }) => {

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.locator("id=input-firstname").fill("Unnath");

    await page.fill("#input-lastname", "Gowda");

    const formEles = await page.$$(".form-group")

    console.log(formEles.length)

    await  page.waitForTimeout(2000);

    // await page.getByRole('link', { name:'login page'}).click();

    // await page.getByText("Login", {exact: true}).click()

    // await page.getByAltText('naveenopencart').click();

    await expect.soft(page.getByRole('heading', { name: 'Register Accrount' })).toBeVisible();

    await page.locator('#content p a').click();

    await page.waitForTimeout(2000);
})

// npx playwright test --project=chromium --headed