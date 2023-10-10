const orderModel = require("../../../models/mongoose/order");

class Order {
  async get(id = null) {
    return id ? await orderModel.findById(id) : await orderModel.find({});
  }

  async getByType(query) {
    return await statusModel.find({...query});
  }

  async create(payload) {
    return await orderModel.create(payload);
  }

  async update(_id, payload) {
    return await orderModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await orderModel.findByIdAndDelete(id);
    return await orderModel.deleteMany({});
  }

  
}

module.exports = new Order();