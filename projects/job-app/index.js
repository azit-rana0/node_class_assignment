const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const jobRoutes = require("./route/job.route");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// Connection with mongoDB
// mongodb://server:port/db_name
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connecting successfully"))
  .catch((err) => console.log("Error connecting database", err));

// Routes
app.use("/api/v1/job", jobRoutes);

const portNo = process.env.PORT;

app.listen(8080, () => {
  console.log(`Server is up and running at port ${portNo}`);
});
