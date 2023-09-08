const userccService = require("../services/userccService");

class UserCC {

  async get(req, res, next) {
    try {
      const { usercc_id } = req.params;
      const response = await userccService.get(usercc_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const response = await userccService.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getCardListByUser(req, res, next) {
    try {
      const { user_id } = req.params;
      const response = await userccService.getCustomeQuery({user_id});
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getCardListByCompany(req, res, next) {
    try {
      const { company_id } = req.params;
      const response = await userccService.getCustomeQuery({company_id});
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await userccService.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { usercc_id } = req.params;
      const response = await userccService.update(usercc_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { usercc_id } = req.params;
      const response = await userccService.delete(usercc_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserCC();