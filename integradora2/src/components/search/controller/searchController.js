const searchServices = require("../services/searchService");

class Search {

    async get(req, res, next){
        const { id } = req.params;
        const response = await searchServices.get(id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await searchServices.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await searchServices.create(req.body);
        res.json(response);
    }
}

module.exports = new Search();