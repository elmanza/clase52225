const collectionService = require("../services/collectionService");

class Collection {

  async get(req, res, next) {
    try {
      const { collection_id } = req.params;
      const response = await collectionService.get(collection_id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await collectionService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await collectionService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { collection_id } = req.params;
      const response = await collectionService.update(collection_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { collection_id } = req.params;
      const response = await collectionService.delete(collection_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Collection();