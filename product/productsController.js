const ProductsModel = require("./productsModel");
const CategoryController = require("../category/categoryController");
const productsModel = require("./productsModel");

class ProductsController {
  // add product
  async addProduct(body) {
    try {
      // checking category exist
      await CategoryController.findCategory(body.parentCategory)
      // get unique TagID
      let getTagId = await ProductsModel.getTagId();
      body.tag_id = getTagId;
      // save product in mongoDB
      let result = await ProductsModel.addProduct(body);
      // update TagID
      await ProductsModel.updateTagId()
      return result;
    } catch (error) {
      console.log("🚀 > file: productsController.js > line 8 > AppearanceController > addProduct > error", error)
      throw error;
    }
  }

  // gets products by ID
  async getProduct(id) {
    try {
      let result = await ProductsModel.getProduct(id)
      return result;
    } catch (error) {
      console.log("🚀 > file: productsController.js > line 19 > ProductsController > getProduct > error", error)
      throw error
    }
  }

  async getProductbySlug(slug) {
    try {
      let result = await ProductsModel.getProductbySlug(slug)
      return result;
    } catch (error) {
      console.log("🚀 > file: productsController.js > line 19 > ProductsController > getProduct > error", error)
      throw error
    }
  }

  async getProductByCategory(id) {
    try {
      return await productsModel.getProductByCategory(id)
    } catch (error) {
      console.log("🚀 > file: productsController.js > line 39 > ProductsController > getProductByCategory > error", error)
      throw error
    }
  }

  async getAllProducts(body) {
    try {
      if(body.items||body.page){
        --body.page;
        body.page = body.items*body.page
        return await ProductsModel.getAllProductsByPagination(body)
      }
      let result = await ProductsModel.getAllProducts(body)
      return result
    } catch (error) {
      console.log("🚀 > file: productsController.js > line 29 > ProductsController > getAllProducts > error", error)
      throw error
    }
  }
}

module.exports = new ProductsController()