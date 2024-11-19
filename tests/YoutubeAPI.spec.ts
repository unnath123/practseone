// let apiKey = "AIzaSyDq0XuXirjL-V7OGr6IDqV-_RequFzzIt4"
// import { test, expect, request } from '@playwright/test'


// test('API test', async () => {
//     // Create a new request context with a base URL
//     const context = await request.newContext({
//         baseURL: 'https://www.googleapis.com/youtube/v3',
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': `${apiKey}` // Use a bearer token for security
//         }
//     });


//     const response = await context.get(`search?&part=snippet&q='Karnataka'&type=video&maxResults=2`);
//     console.log(await response.json());
// })

// //npx playwright test ./tests/YoutubeAPI.spec.ts --project=chromium

