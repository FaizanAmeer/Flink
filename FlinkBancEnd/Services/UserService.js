const becrypt = require("bcrypt");
const UserModel = require("../Models/UserModel");
class UserService {
  #UserModel = new UserModel();
  constructor() {}
  async createUser(values) {
    const { password } = values;
    const salt = await becrypt.genSalt(10);
    const hashPassword = await becrypt.hash(password, salt);
    const userData = { ...values, password: hashPassword };
    const user = await new UserModel().addUser(userData);
    return user;
  }
  async getUser(value) {
    const getUser = await this.#UserModel.getUser(value);
  }
}

module.exports = UserService;
