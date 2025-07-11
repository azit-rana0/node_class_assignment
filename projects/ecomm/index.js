const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const authMiddleware = require("./middlewares/auth");

const app = express();

dotenv.config();

// middleware
app.use(express.json());

//// IGONRE BELOW BLOCK
const cors = require("cors");
app.use(cors());

// DB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connection successfully"))
  .catch((err) => console.log("DB connection Error", err));

// Moduler routes
app.use("/api/v1/user", userRoutes);
app.use(authMiddleware); // do not move the middleware
app.use("/api/v1/product", productRoutes);

const portNo = process.env.PORT_NO || 8080;

app.listen(portNo, () => {
  console.log(`Server is up and running at port ${portNo}`);
});
