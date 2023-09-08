const careInstructionServices = require("../services/careInstructionService");

class CareInstruction {

  async get(req, res, next){
    try {
      const { care_id } = req.params;
      const response = await careInstructionServices.get(care_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next){
    try {
      const response = await careInstructionServices.get();
      res.json(response);      
    } catch (error) {
      next(error);
    }
  }    

  async create(req, res, next){
    try {
      const response = await careInstructionServices.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next){
    try {
      const { care_id } = req.params;
      const response = await careInstructionServices.update(care_id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next){
    try {
      const { care_id } = req.params;
      const response = await careInstructionServices.delete(care_id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CareInstruction();