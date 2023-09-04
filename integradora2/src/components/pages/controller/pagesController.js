const pagesServices = require("../services/pagesService");

class Pages {

    async get(req, res, next){
        const { id } = req.params;
        const response = await pagesServices.get(id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await pagesServices.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await pagesServices.create(req.body);
        res.json(response);
    }
}

module.exports = new Pages();