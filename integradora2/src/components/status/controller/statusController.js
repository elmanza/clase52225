const statusServices = require("../services/statusService");

class Status {

  async get(req, res, next) {
    try {
      const { status_id } = req.params;
      const response = await statusServices.get(status_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getAll(req, res, next) {
    try {
      const response = await statusServices.get();
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getByType(req, res, next) {
    try {
      const { type } = req.params;
      const response = await statusServices.getByType(type);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async create(req, res, next) {
    try {
      const response = await statusServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new Status();