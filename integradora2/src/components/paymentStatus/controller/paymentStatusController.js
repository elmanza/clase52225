const paymentStatus = require("../services/paymentStatusService");

class PaymentStatus {

  async get(req, res, next) {
    try {
      const { paymentstatus_id } = req.params;
      const response = await paymentStatus.get(paymentstatus_id);
      res.json(response);
    } catch (error) {
      next(error);
    }

  }

  async getAll(req, res, next) {
    try {
      const response = await paymentStatus.get();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const response = await paymentStatus.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { paymentstatus_id } = req.params;
      const response = await paymentStatus.update(paymentstatus_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { paymentstatus_id } = req.params;
      const response = await paymentStatus.delete(paymentstatus_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PaymentStatus();