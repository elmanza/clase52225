const JWTService = require("../../../utils/JWT/jwt");
const authService = require("../services/authService");

class AuthMiddleware {

  static verifyRole = (...roles) => {
    return (req, res,next) => {
      try {
        if(req.user && roles.includes(req.user?.rol)) return next();
        res.send("No tienes permisos, Sigue intentando!");
      } catch (error) {
        res.send("Salió algo mal!")
      }
    }
  }

  static getAuthenticatedUser = async (req, res, next) => {
    try {
      const authorization = req.headers.authorization || '';
      if(authorization === "") return res.status(401).send("No estas enviando headers");
      const token = authorization.split(' ')[1];
      if(await JWTService.verify(token)){
        let payload = await JWTService.decode(token);
        console.log("payload", payload);
        let user = await authService.getUser(payload.id);
        console.log("user", user);
        if(!user) return res.status(401).send("Usuario sin accesos");
        req.user = user;
        next();
      }else{
        return res.status(401).send("Token no válido");
      }
    } catch (error) {
      res.status(401).send("No estas enviando un token válido")
    }
  }

}

module.exports = AuthMiddleware;