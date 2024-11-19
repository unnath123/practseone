const { test, expect } = require('@playwright/test');

test.only("API test", async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users/2");
    console.log(await response.json());
})

test("API POST", async ({ request }) => {

    const response1 = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Unnath",
            "job": "engineer"
        },
        headers: {
            "Accept": "Application/json"
        }
    })

    console.log(await response1.json());

    console.log(response1.status())
    expect(response1.status()).toBe(201)
})

let userID = 640;

test("API PUT", async ({ request }) => {

    const response1 = await request.put(`https://reqres.in/api/users/${userID}`, {
        data: {
            "name": "Unnath",
            "job": "Police"
        },
        headers: {
            "Accept": "Application/json"
        }
    })

    console.log(await response1.json());

    console.log(response1.status())
    expect(response1.status()).toBe(200)

})



// npx playwright test ./tests/apiTest.spec.ts --project=chromium --headed