import {test} from "@playwright/test";

test("test browser",async({page})=>{
        await page.goto("https://computertour.netlify.app/");
        await page.pause();
    });