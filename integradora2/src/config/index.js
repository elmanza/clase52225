require('dotenv').config();
const config = {
    port: process.env.PORT,
    cookie_key: process.env.COOKIE_KEY,
    jwt_secret: process.env.JWT_SECRET,
    jwt_algorithm: process.env.HS256
}

const mongoDB = {

}

module.exports = { config, mongoDB }