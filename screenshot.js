import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173", {
    waitUntil: "networkidle2",
  });

  await page.screenshot({
    path: "homepage.png",
    fullPage: true,
  });
  await browser.close();
})();
