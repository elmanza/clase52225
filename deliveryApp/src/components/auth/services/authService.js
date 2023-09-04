
const userService = require("../../user/services/userService");
const JWTService = require("../../../utils/JWT/jwt");
const { createHash, isValidPassword } = require("../../../utils/bcrypt");
class Auth {

  async login({email, password}){
    const user = await userService.findByEmail(email);
    if(!user) return {status:401, response: "Autorización no válida."};
    if(!isValidPassword(password, user)) return {status:403, response: "Autorización no válida."}
    const token = await JWTService.generateJWT({id: user._id});
    return await userService.updateUser(user._id, {token});
  }

  // async recovery({email, password}){
  //   try {
  //     let user = await userModel.findOne({
  //       email: email
  //     });
  //     console.log(user);
  //     if(!user) return {status:401, response: "No existe en la BD!"}
  //     let updatedPassword = await userModel.findByIdAndUpdate(user._id, {password: createHash(password)}, { new: true });
  //     console.log({updatedPassword});
  //     return {status:200, response: updatedPassword};
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // }
}

module.exports = new Auth();