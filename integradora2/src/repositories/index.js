const { User } = require("../models/factory");
const UserRepository = require("./user.repository");

const userService = new UserRepository(new User());

module.exports = {
    userService
}