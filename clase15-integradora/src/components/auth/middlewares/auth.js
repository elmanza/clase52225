const JWTService = require("../../../utils/JWT/JWTServices");
const authService = require("../services/authService");
const isAuth = (req, res,next) => {
  try {
    if(req.session?.user) return next();
    res.redirect('/auth/login')
  } catch (error) {
    res.send("Salió algo mal!")
  }
}

const isNotAuth = (req, res,next) => {
  try {
    if(req.session?.user) return res.redirect('/auth/dashboard')
    next();
  } catch (error) {
    res.send("Salió algo mal!")
  }
}

const getAuthJwt = async (req, res, next) => {
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

module.exports = {
    isAuth,
    isNotAuth,
    getAuthJwt
}