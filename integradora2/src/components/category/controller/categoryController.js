const categoryServices = require("../services/categoryService");

class Category {

  async get(req, res, next) {
    try {
      const { category_id } = req.params;
      const response = await categoryServices.get(category_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await categoryServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await categoryServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { category_id } = req.params;
      const response = await categoryServices.update(category_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { category_id } = req.params;
      const response = await categoryServices.delete(category_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Category();