const JWT = require('jsonwebtoken');
const { config } = require('../../config');


const generateJWT = async payload => {
    try {
      const token = await JWT.sign(payload, config.jwt_secret, {
        expiresIn: '24h', //config.jwt_experies * 1000 || 6000000,
        algorithm: config.jwt_algorithm || 'HS256'
      });
      return token;
    } catch (error) {
      console.log(`~~~~  generateJWT ~~ `, error)
      return null;
    }
}

const verify = async token => {
  try {
    const certificated = await JWT.verify(token, config.jwt_secret, {
      algorithm: [config.jwt_algorithm]
    });
    return certificated;
  } catch (error) {
    return null;
  }
}

const decode = async token => {
  try {
    const decodeToken = await JWT.decode(token, config.jwt_secret, {
      algorithm: [config.jwt_algorithm]
    });
    return decodeToken;
  } catch (error) {
    return null;
  }
}




module.exports = {
  generateJWT,
  verify,
  decode
}