import fs from "fs";
import path from "path";
import playwright from "playwright";

const TARGET_DIR = path.resolve(__dirname, "../screenshots");

const HEIGHT = 1024;
const WIDTH = 768;

async function main() {
  const moduleName = assertNonEmptyString(
    process.env["MODULE"],
    'process.env["MODULE"]',
  );
  const url = `http://localhost:${assertNonEmptyString(
    process.env["PORT"],
    'process.env["PORT"]',
  )}`;

  await fs.promises.mkdir(TARGET_DIR, { recursive: true });

  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    // Modified from `playwright.devices["Desktop Chrome HiDPI"]`
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.62 Safari/537.36",
    viewport: { width: WIDTH, height: HEIGHT },
    screen: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: false,
  });
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForSelector("#__next");
  await page.waitForLoadState("networkidle");
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

function assertNonEmptyString(input: unknown, name: string): string {
  if (typeof input !== "string" || !input) {
    throw new Error(`${name}: got unexpected ${JSON.stringify(input)}`);
  }

  return input;
}
