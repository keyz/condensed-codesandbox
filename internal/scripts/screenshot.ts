import playwright from "playwright";

async function main() {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    ...playwright.devices["Desktop Chrome HiDPI"],
  });
  const page = await context.newPage();

  await page.goto("https://google.com");
  await page.waitForTimeout(1000);
  await context.close();
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
