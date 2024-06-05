const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();
const adminData = require("../routes/admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    pageTitle: "Shop", ///pug
    path: "/", //pug
    hasProducts: products.length > 0, // handlebar
    activeShop: true, // handlebar
    productCss: true // handlebar
  }); 
});

module.exports = router;
