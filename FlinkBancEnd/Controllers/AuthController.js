const User = require("../Services/UserService");
const AppResponse = require("../Utility/AppRespnse");
const asyncHandler = require("../Utility/aysncHandler");
const Validation = require("../Validator/authValidation");
class AuthController {
  #validation = new Validation();
  #user = new User();
  registerUser() {
    return asyncHandler(async (req, res, next) => {
      req.body = { ...req.body, role: 2 };
      const validation = await this.#validation.userRegister(req.body);
      const user = await this.#user.createUser(validation);
      console.log(user);
      AppResponse.sucess(res, 201, user, "User Add Secessfuly");
      console.log("working After Sent Request");
    });
  }
  userLogin() {
    return asyncHandler(async (req, res, next) => {
      // console.log(req.body);
      const validation = await this.#validation.getUser(req.body);
      const user = await this.#user.getUser(validation.email_address);
    });
  }
}
// const registerUser = );

module.exports = AuthController;
