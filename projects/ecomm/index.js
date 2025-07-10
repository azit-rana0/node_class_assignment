const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.route");
const { default: mongoose } = require("mongoose");

const app = express();

dotenv.config();

// middleware
app.use(express.json());

// DB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connection successfully"))
  .catch((err) => console.log("DB connection Error", err));

// Moduler routes
app.use("/api/v1/user", userRoutes);

const portNo = process.env.PORT_NO || 8080;

app.listen(portNo, () => {
  console.log(`Server is up and running at port ${portNo}`);
});
