const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product", 
    path: "/admin/add-product", // pug
    formCss: true, // handlebar
    productCss: true, // handlebar
    activeAddProduct:true // handlebar
  });
});

router.post("/add-product", (req, res, next) => {
  console.log("Product");
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.router = router;
module.exports.products = products;
