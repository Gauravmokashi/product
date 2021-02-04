const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("./productsModel");
const ProductsController = require("./productsController")

//route for adding product
router.post("/add", async (req, resp) => {
  try {
    //proceed to products controller
    let result = await ProductsController.addProduct(req.body);
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 ~ file: productsRouter.js ~ line 64 ~ router.post ~ error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.get("/get/:id", async (req, resp) => {
  try {
    let result = await ProductsController.getProduct(req.params.id)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: productsRouter.js > line 58 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.get("/get-product-by-category/:id", async (req, resp) => {
  try {
    let result = await ProductsController.getProductByCategory(req.params.id)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: productsRouter.js > line 58 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.get("/get-product-by-slug/:slug", async (req, resp) => {
  try {
    let result = await ProductsController.getProductbySlug(req.params.slug)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: productsRouter.js > line 58 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.post("/get-all", async (req, resp) => {
  try {
    let result = await ProductsController.getAllProducts(req.body)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: productsRouter.js > line 59 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

module.exports = router;
