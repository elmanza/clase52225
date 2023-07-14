require("dotenv").config();

const config = {
  port: process.env.PORT,
  cookie_key: process.env.COOKIE_KEY
}

const mongo = {
  mongo_local: process.env.MONGO_LOCAL,
  mongo_atlas: process.env.MONGO_ATLAS
}

module.exports = { config, mongo };