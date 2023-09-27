import path from "path";
import playwright from "playwright";

const TARGET_DIR = path.resolve(__dirname, "../screenshots");

async function main() {
  const moduleName = process.env["MODULE"];
  const url = `http://localhost:${process.env["PORT"]}`;

  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    ...playwright.devices["Desktop Chrome HiDPI"],
    viewport: { width: 720, height: 1280 },
    screen: { width: 1120, height: 1792 },
  });
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: path.resolve(TARGET_DIR, `${moduleName}.png`),
  });
  await context.close();
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
