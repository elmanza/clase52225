const outfitService = require("../services/outfitService");

class Outfit {

  async get(req, res, next) {
    try {
      const { outfit_id } = req.params;
      const response = await outfitService.get(outfit_id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await outfitService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await outfitService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { outfit_id } = req.params;
      const response = await outfitService.update(outfit_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { outfit_id, product_id } = req.params;
      const response = await outfitService.deleteProduct(outfit_id, product_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { outfit_id } = req.params;
      const response = await outfitService.delete(outfit_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Outfit();