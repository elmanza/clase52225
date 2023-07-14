
const authService = require("../services/authService");
class Auth {

  async session(req, res, next){
    let { name = '' } = req.query;
    // console.log(req.session.Session.visits);
    if(req.session.visits){
      req.session.visits++;
      let _name = `${req.session.name.length ? `${req.session.name}, ` : ''}`;
      res.send(`${_name}Haz visitado la pagina ${req.session.visits} veces!`);
    }else{
      req.session.name = name;
      req.session.visits = 1;
      let _name = `${req.session.name.length ? `${req.session.name}, ` : ''}`;
      res.send(`${_name}Te damos la Bienvenida`);
    }
  }

  async loginView(req, res, next){
    res.render('login', {});
  }
  
  async login(req, res, next){
    let { email, password } = req.body;
    res.cookie('username', email, {maxAge: 20000, httpOnly: true}).json(true);
  }

  async getCookies(req, res, next){
    // let { name } = req.params;
    res.json(req.cookies);
  }
}

module.exports = new Auth();