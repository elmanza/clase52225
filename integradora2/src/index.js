const express = require('express');
const cors = require("cors")
const cookie = require('cookie-parser');
const serverRoutes = require('./routes');
const path = require('path');
const { Server: HttpServer} = require('http');
const { config } = require("./config");
const Socket = require('./utils/socket/socket.io');
const MongoDB = require('./config/mongoDB');

class Server {
  constructor(){
    this.app = express();
    this.middlewares();
    this.settings();
    this.views();
    this.sockets();
    this.routes();
    this.mongoDB = new MongoDB();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(cookie(`${config.cookie_key}`));
  }

  settings(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static(`${__dirname}/public`));
  }

  views(){
    this.app.set('view engine', "ejs");
    this.app.set('views', path.join(__dirname, 'views', 'pages'));
  }

  sockets(){
    this.httpServer = new HttpServer(this.app);
    this.socket = new Socket(this.httpServer);

  }

  routes(){
    this.app.use((req, res, next)=>{
      req.socketIO = this.socket;
      next();
    });
    serverRoutes(this.app);
  }

  listen(){
    this.app.listen(config.port, (e) => console.log(`http:localhost:${config.port}`))
  }

}

module.exports = new Server();