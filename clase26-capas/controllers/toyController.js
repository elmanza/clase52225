const toyServices = require('../services/toyServices');

class Toy{

    getById(req, res, next){
        let { id } = req.params;
        res.json(toyServices.getById(Number(id)));
    }

    getAll(req, res, next){
        res.json(toyServices.getAll());
    }

    create(req, res, next){
        const payload = req.body;
        res.json(toyServices.create(payload));
    }
}

module.exports = new Toy();