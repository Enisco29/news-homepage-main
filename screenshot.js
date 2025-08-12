import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://news-homepage-main-liard-ten.vercel.app", { waitUntil: "networkidle2" });
  await page.screenshot({ path: "homepage.png" });
  await browser.close();
})();
