const careInstructionServices = require("../services/careInstructionService");

class CareInstruction {

    async get(req, res, next){
        const { id } = req.params;
        const response = await careInstructionServices.get(id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await careInstructionServices.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await careInstructionServices.create(req.body);
        res.json(response);
    }
}

module.exports = new CareInstruction();