const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./route/job.route");

const app = express();

// Middleware
app.use(express.json());

// Connection with mongoDB
// mongodb://server:port/db_name
mongoose
  .connect("mongodb://localhost:27017/jobapp")
  .then(() => console.log("DB connecting successfully"))
  .catch((err) => console.log("Error connecting database", err));

// Routes
app.use("/api/v1/job", jobRoutes);

const portNo = 8080;

app.listen(8080, () => {
  console.log(`Server is up and running at port ${portNo}`);
});
