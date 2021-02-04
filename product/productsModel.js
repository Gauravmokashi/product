const mongoose = require("mongoose");
const productsSchema = require("./productsSchema");
const ProductSchema = require("./productsSchema");
const TagSchema = require("./tagIdSchema");

class ProductModel {
  async addProduct(body) {
    try {
      //validating products info using schema
      const product = new ProductSchema(body);
      let result = await product.save();
      return result;
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 37 > productModel > addProduct > error", error)
      throw error;
    }
  }

  async getProduct(id) {
    try {
      let result = await ProductSchema.findById(id);
      return result;
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 20 > ProductModel > getProduct > error", error)
      throw error;
    }
  }

  async getProductbySlug(slug) {
    try {
      let result = await ProductSchema.find({ "slug": slug });
      return result;
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 20 > ProductModel > getProduct > error", error)
      throw error;
    }
  }

  async getAllProducts(body) {
    try {
      let result = await ProductSchema.find({}, { Name: 1, tag_id: 1, slug: 1, Description: 1 }).lean();
      return result
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 30 > ProductModel > getAllProducts > error", error)
      throw error
    }
  }

  async getAllProductsByPagination(body) {
    try {
      let result = await ProductSchema.find({}, { Name: 1, tag_id: 1, slug: 1, Description: 1 }).skip(body.page).limit(body.items).lean();
      return result
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 30 > ProductModel > getAllProducts > error", error)
      throw error
    }
  }

  async getProductByCategory(id) {
    try {
      return await productsSchema.find({ "parentId": id }).lean()
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 50 > ProductModel > getProductByCategory > error", error)
      throw error
    }
  }

  async getTagId() {
    try {
      let data = await TagSchema.find({ "id": "tag_id" }).lean();
      if (!data[0]) {
        let tagIdDetails = {
          "id": "tag_id",
          "tag_id": 1
        }
        const product = new TagSchema(tagIdDetails);
        await product.save()
        return 1
      } else {
        return data[0].tag_id
      }
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 43 > ProductModel > getTagId > error", error)
      throw error;
    }
  }

  async updateTagId() {
    try {
      let result = await TagSchema.findOneAndUpdate(
        { id: "tag_id" },
        { $inc: { "tag_id": 1 } }
      );
      console.log("🚀 > file: productsModel.js > line 61 > ProductModel > updateTagId > result", result)
    } catch (error) {
      console.log("🚀 > file: productsModel.js > line 62 > ProductModel > updateTagId > error", error)
      throw error;
    }
  }
}

module.exports = new ProductModel()