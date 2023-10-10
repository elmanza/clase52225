const userModel = require("../../../models/mongoose/user");
const { createHash, isValidPassword } = require("../../../utils/bcrypt");
const JWTService = require("../../../utils/JWT/jwt");
const Boom = require("@hapi/boom");

class User {

  async get(id = null) {
    return id ? await userModel.findById(id) : await userModel.find({});
  }

  async getByRole(query = {}) {
    return await userModel.find({ ...query });
  }

  async create(userObj) {
    let newUser = {
      ...userObj,
      password: createHash(userObj.password),
      token: ''
    };
    let user = await userModel.create(newUser);
    let token = await JWTService.generateJWT({ id: user._id });
    return await userModel.findByIdAndUpdate(user._id, { token }, { new: true });
  }

  async deleteUser(id) {
    return await this.updateUser(id, { isActive: false });
    // return await userModel.findByIdAndDelete(id);
  }

  async updateUser(id, user, updatePassword = false) {
    if (!updatePassword) delete user?.password;
    return await userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async updatePassword(user_id, {password, newPassword}, user) {
    if (newPassword) {
      if (!isValidPassword(password, user)) throw Boom.unauthorized("Credenciales inválidas");
    }
    const _password = createHash(newPassword);
    return await userModel.findByIdAndUpdate(user_id, { password: _password }, { new: true });
  }

  async findByEmail(email) {
    return await userModel.findOne({
      email: email
    });
  }

}

module.exports = new User();