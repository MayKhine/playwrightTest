import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/")
  await page.getByRole("textbox", { name: "What needs to be done?" }).click()
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("buy some icecream!")
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter")
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("buy some chocolate")
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter")
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("pick up med from cvs")
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter")
  await page
    .getByRole("listitem")
    .filter({ hasText: "buy some chocolate" })
    .getByLabel("Toggle Todo")
    .check()
  await page
    .getByRole("listitem")
    .filter({ hasText: "pick up med from cvs" })
    .getByLabel("Toggle Todo")
    .check()
  await page.getByRole("button", { name: "Delete" }).click()
  await page.getByRole("button", { name: "Clear completed" }).click()
  await expect(page.getByRole("heading")).toMatchAriaSnapshot(
    `- heading "todos" [level=1]`
  )
  await expect(
    page.getByRole("textbox", { name: "What needs to be done?" })
  ).toBeEmpty()
  await expect(
    page.getByRole("textbox", { name: "What needs to be done?" })
  ).toBeVisible()
  await page.getByRole("heading", { name: "todos" }).click()
})
