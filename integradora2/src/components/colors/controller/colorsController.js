const colorServices = require("../services/colorsService");

class Color {

    async get(req, res, next){
        const { color_id } = req.params;
        const response = await colorServices.get(color_id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await colorServices.get();
        res.json(response);
    }    

    async create(req, res, next){
        const response = await colorServices.create(req.body);
        res.json(response);
    }
}

module.exports = new Color();