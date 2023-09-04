const rolesServices = require("../services/rolesService");

class Role {
    async getAll(req, res, next){
        const response = await rolesServices.get();
        res.json(response);
    }

    async create(req, res, next){
        const response = await rolesServices.create(req.body);
        res.json(response);
    }
}

module.exports = new Role();