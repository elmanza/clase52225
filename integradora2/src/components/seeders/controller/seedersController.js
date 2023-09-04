const seedersServices = require("../services/seedersService");

class Seeder {

  async init(req, res, next){
    try {
      const response = await seedersServices.init();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async downInit(req, res, next){
    try {
      const response = await seedersServices.downInit();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async insertProducts(req, res, next){
    try {
      const response = await seedersServices.insertProducts();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async downProducts(req, res, next){
    try {
      const response = await seedersServices.downProducts();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
  
}

module.exports = new Seeder();