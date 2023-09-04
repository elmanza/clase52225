const roleModel = require("../../../models/mongoose/role");

class Undifine {
    async get(id = null){
        try {
            return id ? await roleModel.findById(id) : await roleModel.find({});
        } catch (error) {
            return {response: "Hubo un error!"};
        }
    }

    async create(payload){
        try {
            return await roleModel.create(payload);
          } catch (error) {
            console.log(error);
          }
    }
}

module.exports = new Undifine();