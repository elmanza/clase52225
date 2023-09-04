const userModel = require("../../../models/mongoose/user");
const { createHash, isValidPassword } = require("../../../utils/bcrypt");
const JWTService = require("../../../utils/JWT/jwt");


class User {

  /*

  async get(id = null) {
    try {
      return await userService.getUser(id);
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  } 

  async create(userObj) {
    try {
      let user = await userService.createUser(userObj);
      let token = await JWTService.generateJWT({ id: user._id });
      let updatedUser = await userService.updateUser(user._id, { token });
      return { status: 200, updatedUser };
    } catch (error) {
      console.log(error);
    }
  }

  */

  
  async get(id = null) {
    try {
      return id ? await userModel.findById(id) : await userModel.find({});
    } catch (error) {
      return { response: "Hubo un error!" };
    }
  }

  async create(userObj) {
    try {
      let newUser = {
        ...userObj,
        password: createHash(userObj.password),
        token: ''
      };
      let user = await userModel.create(newUser);
      let token = await JWTService.generateJWT({ id: user._id });
      let updatedUser = await userModel.findByIdAndUpdate(user._id, { token }, { new: true });
      return { status: 200, updatedUser };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id) {
    try {
      return await this.updateUser(id, { isActive: false });
      // return await userModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, user, updatePassword = false) {
    if (!updatePassword) delete user?.password;
    return await userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async updatePassword(credentials, user) {
    try {
      if (credentials?.newPassword) {
        if (!isValidPassword(credentials.password, user)) return { status: 403, response: "Contraseña inválidas" };
      }
      const password = createHash(credentials.newPassword);
      return await userModel.findByIdAndUpdate(id, { password }, { new: true });
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail(email) {
    try {
      return await userModel.findOne({
        email: email
      });
    } catch (error) {
      console.log(error);
    }
  }
  
}

module.exports = new User();