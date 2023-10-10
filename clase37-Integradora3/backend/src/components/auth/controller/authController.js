
const authService = require("../services/authService");
class Auth {

  async login(req, res, next){
    try {
      const response = await authService.login(req.body, req.session);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async recovery(req, res, next){
    try {
      let { email, password } = req.body;
      const response = await authService.recovery({email, password});
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
  
}

module.exports = new Auth();