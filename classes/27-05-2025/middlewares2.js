const express = require("express");

const responseTime = require("response-time");

const app = express();

// Middlewares
app.use(express.static(__dirname + "/img"));
app.use(express.json());
app.use(express.urlencoded());

// third party middlewares
app.use(responseTime());

const userData = [
  {
    id: 1,
    name: "Alex",
    profileImage: "http://localhost:8080/simple.png",
  },
  {
    id: 2,
    name: "Peter",
    profileImage: "http://localhost:8080/simple.png",
  },
];

app.get("/users", (req, res) => {
  res.json({
    success: true,
    massage: "User Api data",
    result: userData,
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Dummy Registration API",
  });
});

app.listen(8080, () => {
  console.log("Server is up and running at port 8080");
});
