import puppeteer from "puppeteer";
/**
 * scrape amazon.in listing screen and extract information - product title, price & rating
 * Algorithm
 * 0. Install browser
 * 1. Open browser
 * 2. Open amazon.in
 * 3. Type shoes in searchbox and click search icon
 * 4. Wait for the page to load
 * 5. When the page loads extract the required data
 */

try {
  // step 1
  const browser = await puppeteer.launch(); // Opening a browser
  const page = await browser.newPage(); // Opening a new tab in browser

  //   await page.goto("https://www.amazon.in/");
  await browser.close();
  console.log("working fine");
} catch (err) {
  console.log(err);
}
