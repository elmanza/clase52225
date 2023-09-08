const countryServices = require("../services/countryService");

class Country {

  async get(req, res, next) {
    try {
      const { country_id } = req.params;
      const response = await countryServices.get(country_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getAll(req, res, next) {
    try {
      const response = await countryServices.get();
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async create(req, res, next) {
    try {
      const response = await countryServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { country_id } = req.params;
      const response = await countryServices.update(country_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { country_id } = req.params;
      const response = await countryServices.delete(country_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Country();