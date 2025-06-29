import express from "express";
import { nanoid } from "nanoid";
import fs from "node:fs";
const app = express();

// const urls = {
//   PLs1g4Hf: "https://www.npmjs.com/package/response-time",
// };

// middlewares
app.use(express.urlencoded());

app.get("/", (req, res) => {
  console.log("shortner success");
  res.sendFile(import.meta.dirname + "/index.html");
});

app.post("/shorten", (req, res) => {
  const longUrl = req.body.longUrl;
  // console.log(req.body.longUrl);
  // console.log(nanoid(8));

  // ✅ Validate URL
  try {
    new URL(longUrl); // If this fails, it's an invalid URL
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL provided",
    });
  }

  const shortUrl = nanoid(8);
  // urls[shortUrl] = req.body.longUrl;
  // console.log(urls);

  const fileData = fs.readFileSync("urls.json");
  const urlsFromFiles = JSON.parse(fileData.toString());
  urlsFromFiles[shortUrl] = req.body.longUrl;

  fs.writeFileSync("urls.json", JSON.stringify(urlsFromFiles));
  console.log(urlsFromFiles);

  res.json({
    success: true,
    massage: "URL shortner API success",
    shortUrl: `http://localhost:8080/${shortUrl}`,
  });
});

app.get("/:shortUrl", (req, res) => {
  console.log(req.params.shortUrl);
  const fileData = fs.readFileSync("urls.json");
  const urlsFromFiles = JSON.parse(fileData.toString());

  const longUrl = urlsFromFiles[req.params.shortUrl];
  console.log(longUrl);
  if (longUrl) res.redirect(longUrl);
  else
    res.status(404).json({
      success: false,
      massage: "url not found",
    });
});

app.listen(8080, () => {
  console.log("Server is up and running at port 8080");
});
