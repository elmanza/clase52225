const deliveryOptionServices = require("../services/deliveryOptionsControllerService");

class DeliveryOption {

  async get(req, res, next) {
    try {
      const { id } = req.params;
      const response = await deliveryOptionServices.get(id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await deliveryOptionServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await deliveryOptionServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DeliveryOption();