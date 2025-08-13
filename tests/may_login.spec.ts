import { test, expect } from "@playwright/test"

//test (title, test body)
test("login works", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  await page.fill("#user-name", "standard_user")
  await page.fill("#password", "secret_sauce")
  await page.click("#login-button")
  await page.click("#add-to-cart-sauce-labs-backpack")
})

test("show error on invalid login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  await page.fill("#user-name", "standard_user")
  await page.fill("#password", "invalid_password")
  await page.click("#login-button")
})

test("login, add items to cart, check out", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  await page.fill("#user-name", "standard_user")
  await page.fill("#password", "secret_sauce")
  await page.click("#login-button")
  await page.click("#add-to-cart-sauce-labs-backpack")
  await page.click("#add-to-cart-sauce-labs-onesie")
  await page.click("#shopping_cart_container")
  await page.click("#checkout")
  await page.fill("#first-name", "May Test")
  await page.fill("#last-name", "Khine Test")
  await page.fill("#postal-code", "00000")
  await page.click("#continue")
  await page.click("#finish")
})

test("login, add items to cart twice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  await page.fill("#user-name", "standard_user")
  await page.fill("#password", "secret_sauce")
  await page.click("#login-button")
  await page.click("#add-to-cart-sauce-labs-backpack")
})
