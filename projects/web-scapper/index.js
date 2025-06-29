import puppeteer from "puppeteer";
import fs from "node:fs";
import xlsx from "xlsx";

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

  await page.goto("https://www.amazon.in/", { waitUntil: "domcontentloaded" }); // page loads successfully

  await page.type("#twotabsearchtextbox", "sport shoes under 2000 rs"); // typed my search query in search box

  await page.click("#nav-search-submit-button"); // click on search icon

  await page.waitForNavigation({ waitUntil: "networkidle2" }); // wait for the page to load with the list of products

  const products = await page.evaluate(() => {
    const productCards = document.querySelectorAll(".s-result-item");
    const productDetails = [];

    productCards.forEach((product) => {
      const brand = product.querySelector("h2 span")
        ? product.querySelector("h2 span").innerText
        : "";
      const title = product.querySelector("a>h2>span")
        ? product.querySelector("a>h2>span").innerText
        : "";

      const price = product.querySelector(".a-price-whole")
        ? product.querySelector(".a-price-whole").innerText
        : "";
      const rating = product.querySelector(".a-icon-alt")
        ? product.querySelector(".a-icon-alt").innerText
        : "NA";

      if (title) {
        productDetails.push({ brand, title, price, rating });
      }
    });

    return productDetails;
  });

  console.log(products);
  // Card selector => .s-result-item
  // Title selector => document.querySelector("h2 span")
  // Price => .a-price-whole
  // Rating => .a-icon-alt

  await browser.close();
  // fs.writeFileSync("product.json", JSON.stringify(products));

  const workbook = xlsx.utils.book_new(); //create new object
  const sheet = xlsx.utils.json_to_sheet(products);

  xlsx.utils.book_append_sheet(workbook, sheet, "Amazon products");
  xlsx.writeFile(workbook, "Product-amazon.xlsx");

  console.log("Products saves successfully in Excel file");
} catch (err) {
  console.log(err);
}
