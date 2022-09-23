import { expect, test } from "@playwright/test";

test("Home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Covergo home exercise/);

  await page.locator("#start").click();
  await expect(page).toHaveURL(/.*input/);
});

test("Input page: goback", async ({ page }) => {
  await page.goto("http://localhost:3000/input");
  await page.waitForTimeout(50);

  await page.locator("#back").click();
  await page.waitForTimeout(50);
  await expect(page).toHaveURL(/http:\/\/localhost:3000/);
});

test("Input page: goto error page with age > 100", async ({ page }) => {
  await page.goto("http://localhost:3000/input");
  await page.waitForTimeout(50);

  await page.locator("#age").fill("200");
  await page.locator("#next").click();
  await page.waitForTimeout(50);
  await expect(page).toHaveURL(/.*error/);
});

test("Input page: goto summary page", async ({ page }) => {
  await page.goto("http://localhost:3000/input");
  await page.waitForTimeout(50);

  await page.locator("#name").fill("Nick Jackson");
  await page.locator("#age").fill("50");
  await page.locator("#country").selectOption("USA");
  await page.locator("#package_2").check();
  await page.waitForTimeout(50);
  await expect(page.locator("#premium")).toHaveText("Your premium is: 1750USD");

  await page.waitForTimeout(50);
  await page.locator("#next").click();
  await expect(page).toHaveURL(/.*summary/);
});

test("Summary: forwarded from input", async ({ page }) => {
  await page.goto("http://localhost:3000/input");
  await page.waitForTimeout(50);

  await page.locator("#name").fill("Nick Jackson");
  await page.locator("#age").fill("50");
  await page.locator("#country").selectOption("USA");
  await page.locator("#package_2").check();
  await page.waitForTimeout(50);
  await expect(page.locator("#premium")).toHaveText("Your premium is: 1750USD");

  await page.locator("#next").click();
  await page.waitForTimeout(50);
  await expect(page).toHaveURL(/.*summary/);

  await expect(page.locator("#name")).toHaveText("Name: Nick Jackson");
  await expect(page.locator("#age")).toHaveText("Age: 50");
  await expect(page.locator("#country")).toHaveText("Where do you live: USA");
  await expect(page.locator("#package")).toHaveText("Package: Super Safe");
  await expect(page.locator("#premium")).toHaveText("Your premium is: 1750USD");

  await page.locator("#buy").click();
  await page.waitForTimeout(50);
  await expect(page).toHaveURL(/http:\/\/localhost:3000/);
});
