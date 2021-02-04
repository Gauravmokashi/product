const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CategorysController = require("./categoryController")

//route for adding category
router.post("/add", async (req, resp) => {
  try {
    //proceed to category controller
    let result = await CategorysController.addCategory(req.body);
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 ~ file: categoryRouter.js ~ line 64 ~ router.post ~ error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.get("/get/:id", async (req, resp) => {
  try {
    let result = await CategorysController.findCategory(req.params.id)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: categoryRouter.js > line 58 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

router.get("/get-all/:id", async (req, resp) => {
  try {
    let result = await CategorysController.getCategoryListByParentId(req.params.id)
    resp.status(200).json(result);
  } catch (error) {
    console.log("🚀 > file: categoryRouter.js > line 59 > router.get > error", error)
    resp.status(error.code||400).json(error.message||error);
  }
});

module.exports = router;
