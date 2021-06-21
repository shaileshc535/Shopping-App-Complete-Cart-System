const express = require("express");
const dotenv = require("dotenv");
require("colors");
const connectDB = require("./config/config");
const { errorHandler } = require("./middlewares/errorMiddleware");
const productRoutes = require("./routes/productsRoute");
const userRoutes = require("./routes/UserRoute");
const orderRoute = require("./routes/orderRoute");

//dotenv config
dotenv.config();

// Connect Database
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(errorHandler);

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      .inverse.yellow
  );
});
