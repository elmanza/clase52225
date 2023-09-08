const colorServices = require("../services/colorsService");

class Color {

  async get(req, res, next) {
    try {
      const { color_id } = req.params;
      const response = await colorServices.get(color_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await colorServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await colorServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { color_id } = req.params;
      const response = await colorServices.update(color_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { color_id } = req.params;
      const response = await colorServices.delete(color_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Color();