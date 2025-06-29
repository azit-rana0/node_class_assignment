const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   if (req.query.apikey == "1234abcd") {
//     next();
//   } else {
//     res.status(401).json({
//       success: false,
//       message: "Please pass apikey in the query parameter",
//     });
//   }
// });

// app.use((req, res, next) => {
//   console.log("M1");
//   req.firstname = "Alexa";
//   req.address = "1234 hello";
//   //   return res.json({
//   //     success: true,
//   //     message: "Response from M1",
//   //   });
//   //   console.log("M1 after res.json");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("M2", req.address);
//   next();
// });

// app.post("/login", (req, res, next) => {
//   res.json({
//     success: true,
//     message: "Login API",
//   });
// });

// app.get("/todos", (req, res, next) => {
//   console.log("TODO", req.firstname);
//   try {
//     throw new Error("you message");
//     //   next();
//     res.json({
//       success: true,
//       message: "Todos API",
//     });
//   } catch (err) {
//     console.log("ERR", err);
//     next(err);
//     // res.status(400).json({
//     //   success: false,
//     //   message: "Error occured",
//     // });
//   }
//   res.json({
//     success: true,
//     message: "Todos API",
//   });
// });

// app.use("/users", (req, res, next) => {
//   console.log("Users");
//   res.json({
//     success: true,
//     message: "Users API",
//   });
// });

// // 404 Route handler
// app.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// app.use((err, req, res, next) => {
//   // fs.appendFile("error.log", err.message)
//   console.log("ERROR", err);
//   res.status(500).json({
//     success: false,
//     message: "Internal server error",
//   });
// });

// catch error another method

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Someting went wrong",
  });
});

app.listen(8080, () => console.log("Server is up and running at port 8080"));
