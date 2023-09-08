const tagsService = require("../services/tagsService");

class Tag {

  async get(req, res, next) {
    try {
      const { tags_id } = req.params;
      const response = await tagsService.get(tags_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getAll(req, res, next) {
    try {
      const response = await tagsService.get();
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getByCategory(req, res, next) {
    try {
      const { category_id } = req.params;
      const response = await tagsService.getByCategory(category_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async create(req, res, next) {
    try {
      const response = await tagsService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { tags_id } = req.params;
      const response = await tagsService.update(tags_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { tags_id } = req.params;
      const response = await tagsService.delete(tags_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Tag();