const genderServices = require("../services/genderService");

class Gender {

  async get(req, res, next) {
    try {
      const { gender_id } = req.params;
      const response = await genderServices.get(gender_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await genderServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await genderServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { gender_id } = req.params;
      const response = await genderServices.update(gender_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { gender_id } = req.params;
      const response = await genderServices.delete(gender_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Gender();