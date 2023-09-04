const UserDTO = require("../models/DTOs/user.dto");
module.exports = class UserRepository {
  constructor(dao){
    this.dao = dao;
  }

  async getUser(id){
    return await this.dao.get(id);
  }

  async createUser(user){
    const usertInsert = new UserDTO(user);
    return await this.dao.create(usertInsert);
  }

  async updateUser(id, user){
    return await this.dao.update(id, user);
  }
}