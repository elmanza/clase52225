const userServices = require("../services/userService");

class User {
    async get(req, res, next){
        let { user_id } = req.params;
        const response = await userServices.get(user_id);
        res.json(response);
    }

    async getAll(req, res, next){
        const response = await userServices.get();
        res.json(response);
    }

    async create(req, res, next){
        const response = await userServices.create(req.body);
        res.json(response);
    }

    async deleteUser(req, res, next){
        let { user_id } = req.params;
        const response = await userServices.updateUser(user_id, {isActive: false});
        res.json(response);
    }

    async updateUser(req, res, next){
        let { user_id } = req.params;
        const response = await userServices.updateUser(user_id, req.body);
        res.json(response);
    }

    async updatePassword(req, res, next){
        const response = await userServices.updatePassword(req.body, req.user);
        res.json(response);
    }
}

module.exports = new User();