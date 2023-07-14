
const productModel = require("../../../models/mongo/product");
const faker = require("faker");
class Auth {
  async login(id){
    try {
      let response = id
        ? await productModel.findById(id)
        : await productModel.find({});
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async signup(cant){
    try {
      for (let i = 0; i < cant; i++) {
        const product = {
          "nombre": faker.commerce.productName(),
          "descripcion": faker.lorem.sentence(),
          "precio": faker.commerce.price(),
          "stock": faker.random.number(),
          "imagen": faker.image.imageUrl()
        }
        await productModel.create(product);
      }
      return {res: true};
    } catch (error) {
      console.log(error);
    }
  }

  async createCookie(payload){
    try {
      return await productModel.create(payload);
    } catch (error) {
      console.log(error);
    }
  }

  async getCookies(id, payload){
    try {
      return await productModel.findByIdAndUpdate(id, payload, { new: true });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Auth();