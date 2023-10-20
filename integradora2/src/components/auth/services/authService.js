
const userService = require("../../user/services/userService");
const JWTService = require("../../../utils/JWT/jwt");
const { createHash, isValidPassword } = require("../../../utils/bcrypt");
const faker = require("faker");
const Boom = require("@hapi/boom");
// const cartService = require("../../cart/services/cartService");
// const wishlistService = require("../../wishlist/services/wishlistService");
class Auth {

  async login({email, password, transfer = false}){
    const user = await userService.findByEmail(email);
    if(!user) throw Boom.unauthorized("Credenciales inválidas");
    if(!isValidPassword(password, user)) throw Boom.unauthorized("Credenciales inválidas");
    const token = await JWTService.generateJWT({id: user._id});
    if (transfer) {
      // if (cart.length) await cartService.transferCartFromSessions(user._id, cart[0].products);
      // if (wishlist.length) await wishlistService.transferWishlistFromSessions(user._id, wishlist);
    }
    return await userService.updateUser(user._id, {token});
  }

  async recovery({email, password}){
    let user = await userService.findByEmail(email);
    if(!user) throw Boom.badRequest('No existe este usuario en la Base de datos');
    let updatedPassword = await userService.updateUser(user._id, {password: createHash(password)}, true);
    return updatedPassword;
  }

  async bulkCreate(cant){
    try {
      for (let i = 0; i < cant; i++) {
        const product = {
          "nombre": faker.commerce.productName(),
          "descripcion": faker.lorem.sentence(),
          "precio": faker.commerce.price(),
          "stock": faker.random.number(),
          "imagen": faker.image.imageUrl()
        }
        await userService.create(product);
      }
      return {res: true};
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Auth();