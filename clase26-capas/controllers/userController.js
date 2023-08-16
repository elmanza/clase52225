const userServices = require('../services/userServices');

class User{

    getById(req, res, next){
        let { id } = req.params;
        res.json(userServices.getById(Number(id)));
    }

    getAll(req, res, next){
        res.json(userServices.getAll());
    }

    create(req, res, next){
        const payload = req.body;
        res.json(userServices.create(payload));
    }
}

module.exports = new User();