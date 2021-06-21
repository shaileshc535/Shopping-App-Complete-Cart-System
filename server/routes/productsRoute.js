const express = require("express");
const router = express.Router();
const {
  getProduct,
  getProducts,
} = require("../controllers/productsController");

// GET ROUTE FOR ALL PRODUCTS
// router.get("/products", getProducts);
router.route("/products").get(getProducts);

// GET ROUTE FOR SINGLE PRODUCT
// router.get("/products/:id", getProduct);
router.route("/products/:id").get(getProduct);

// POST ROUTE FOR PRODUCT

module.exports = router;
