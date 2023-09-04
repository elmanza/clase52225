const __Services = require("../services/__Service");

class Undifine {

    async get(req, res, next){
        const { id } = req.params;
        const response = await __Services.get(id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await __Services.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await __Services.create(req.body);
        res.json(response);
    }
}

module.exports = new Undifine();