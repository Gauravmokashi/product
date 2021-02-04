const mongoose = require("mongoose");
const CategorySchema = require("./categorySchema");

class CategoryModel {
  async addCategory(body) {
    try {
      //validating category info using schema
      
      const category = new CategorySchema(body);
      let result = await category.save();
      return result;
    } catch (error) {
      console.log("🚀 > file: categoryModel.js > line 37 > categoryModel > addCategory > error", error)
      throw error;
    }
  }
  
  async findCategory(id) {
    try {
      let result = await CategorySchema.find({ "id": id });
      if (!result[0]) {
        throw { code: 400, details: { message: "category not found" } };
      }
      return result;
    } catch (error) {
      console.log("🚀 > file: categoryModel.js > line 20 > CategoryModel > getCategory > error", error)
      throw error;
    }
  }
  
  async getCategoryListByParentId(id) {
    try {
      let result = await CategorySchema.find({"parentId":id})
      return result
    } catch (error) {
      console.log("🚀 > file: categoryModel.js > line 35 > CategoryModel > getCategoryListByParentId > error", error)
      throw error
    }
  }

  async getAllCategory() {
    try {
      let result = await CategorySchema.find().lean();
      return result
    } catch (error) {
      console.log("🚀 > file: categoryModel.js > line 30 > CategoryModel > getAllCategory > error", error)
      throw error
    }
  }
}

module.exports = new CategoryModel()