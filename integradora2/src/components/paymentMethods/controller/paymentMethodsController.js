const paymentMethodsServices = require("../services/paymentMethodsService");

class PaymentMethods {

  async get(req, res, next) {
    try {
      const { paymentmethods_id } = req.params;
      const response = await paymentMethodsServices.get(paymentmethods_id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await paymentMethodsServices.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await paymentMethodsServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PaymentMethods();