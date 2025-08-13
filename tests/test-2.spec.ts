import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("chrome-error://chromewebdata/")
  await page.goto("https://bitebot.builtbymay.com/")
  await page.getByText("Bite Bot").click()
  await page.getByRole("textbox", { name: "Type or select ingredient" }).click()
  await page
    .getByRole("textbox", { name: "Type or select ingredient" })
    .fill("chicken")
  await page.getByText("Chicken").click()
  await page.getByRole("button", { name: "Get recipe" }).click()
  await page.getByRole("button", { name: "Get a different recipe" }).click()
  await page.getByRole("textbox", { name: "Type or select ingredient" }).click()
  await page
    .getByRole("textbox", { name: "Type or select ingredient" })
    .fill("potatoes")
  await page.getByRole("button", { name: "➕" }).click()
  await page.getByRole("button", { name: "Get a different recipe" }).click()
  await page.getByRole("button", { name: "Get a different recipe" }).click()
})
