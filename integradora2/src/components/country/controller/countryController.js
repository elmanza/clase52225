const countryServices = require("../services/countryService");

class Country {

    async get(req, res, next){
        const { country_id } = req.params;
        const response = await countryServices.get(country_id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await countryServices.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await countryServices.create(req.body);
        res.json(response);
    }
}

module.exports = new Country();