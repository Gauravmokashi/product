const CategoryModel = require("./categoryModel");

class CategoryController {
  // add category
  async addCategory(body) {
    try {
      if(body.parentId){
        let checkParentIdExist = await this.findCategory(body.parentId)
      }
      // save category in mongoDB
      let result = await CategoryModel.addCategory(body);
      return result;
    } catch (error) {
      console.log("🚀 > file: categorysController.js > line 8 > AppearanceController > addCategory > error", error)
      throw error;
    }
  }

  // gets categorys by ID
  async findCategory(id) {
    try {
      let result = await CategoryModel.findCategory(id)
      return result;
    } catch (error) {
      console.log("🚀 > file: categorysController.js > line 19 > CategoryController > getCategory > error", error)
      throw error
    }
  }

  async getCategoryListByParentId(id){
    try {
      if(!id){
        throw { code: 400, details: { message: "id is required" } };
      }
      return await CategoryModel.getCategoryListByParentId(id);
    } catch (error) {
      console.log("🚀 > file: categoryController.js > line 39 > CategoryController > getcategoryByParentId > error", error)
      throw error;
    }
  }

  async listCategory(body) {
    try {
      if(!body.parentId){
        throw {code:400, details:{message: "parent id not found"}};
      }
      if(!body.parentId){
        throw {code:400, details:{message: "parent id not found"}};
      }
      await CategoryModel.getCategory(body.parentId)
      let result = await CategoryModel.listCategory(body)
      return result
    } catch (error) {
      console.log("🚀 > file: categorysController.js > line 29 > CategoryController > getAllCategory > error", error)
      throw error
    }
  }
}

module.exports = new CategoryController()