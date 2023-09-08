const deliveryOptionServices = require("../services/deliveryOptionsControllerService");

class DeliveryOption {

  async get(req, res, next) {
    try {
      const { delivery_option_id } = req.params;
      const response = await deliveryOptionServices.get(delivery_option_id);
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

  async update(req, res, next) {
    try {
      const { delivery_option_id } = req.params;
      const response = await deliveryOptionServices.update(delivery_option_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { delivery_option_id } = req.params;
      const response = await deliveryOptionServices.delete(delivery_option_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DeliveryOption();