const categoryServices = require("../services/categoryService");

class Category {

  async get(req, res, next) {
    const { category_id } = req.params;
    const response = await categoryServices.get(category_id);
    res.json(response);
  }

  async getAll(req, res, next) {
    const response = await categoryServices.get();
    res.json(response);
  }

  async create(req, res, next) {
    const response = await categoryServices.create(req.body);
    res.json(response);
  }

  async delete(req, res, next) {
    const { category_id } = req.params;
    const response = await categoryServices.delete(category_id);
    res.json(response);
  }
}

module.exports = new Category();