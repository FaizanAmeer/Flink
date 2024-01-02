const joi = require("joi");
const GlobalErrorHandlingClass = require("../Utility/GlobalErrorHandlingClass");

class Validation {
  async userRegister(data) {
    const registerSchema = joi.object({
      firstName: joi.string().required().lowercase().trim().messages({
        "string.base": `First Name should be a type of 'text'`,
        "string.empty": `First Name cannot be an empty field`,
        "string.min": `First Name should have a minimum length of {#limit}`,
        "any.required": `First Name is a required field`,
      }),
      lastName: joi.string().required().lowercase().trim().messages({
        "string.base": `"Last Name" should be a type of 'text'`,
        "string.empty": `"Last Name" cannot be an empty field`,
        "any.required": `"Last Name" is a required field`,
        "string.validate": "Last Name must be a string",
      }),
      phoneNumber: joi
        .string() // Use string() instead of number() for phone numbers
        .regex(/^(\+\d{1,3}\s?)?(\d[0-9]{10}|\d{3}-\d{3}-\d{4})$/)
        .required()
        .messages({
          "string.pattern.base": "Phone Number Required",
          "string.empty": "Phone Number Cannot be an empty field",
        }),
      email: joi.string().email().required().lowercase().trim().messages({
        "string.email": "Email not Valid Pleas Check Again Your Email Address",
        "any.required": "Email is a required field",
      }),
      age: joi.number().required().messages({
        "number.base": "Age Must be a Number",
        "string.empty": "Age Cannot be an empty field",
        "any.required": "Age is a required field",
      }),
      role: joi.number().required(),
      password: joi
        .string()
        .trim()
        .required()
        .messages({ "string.any": "Password is required field" }),
      repeatPassword: joi.ref("password"),
    });
    // const { firstName, lastName, email, phoneNumber, age, role, password } =
    console.log(registerSchema.validate(data));
    const { error, value } = registerSchema.validate(data);
    if (error) {
      throw new GlobalErrorHandlingClass(error.details[0].message, 400);
    }
    const { firstName, lastName, email, phoneNumber, age, role, password } =
      value;
    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      role_id: role,
      password,
    };
  }
  async getUser(data) {
    const LoginSchema = joi.object({
      email: joi.string().email().required().lowercase().trim().messages({
        "string.email": "Email not Valid Pleas Check Again Your Email Address",
        "any.required": "Email is a required field",
      }),
      password: joi.string().trim().required().messages({
        "string.empty": "Password Cannot be an empty field",
        "any.required": "Password is a required field",
      }),
    });
    const { error, value } = LoginSchema.validate(data);
    if (error) {
      throw new GlobalErrorHandlingClass(error.details[0].message, 400);
    }
    const { email_address: email, password } = value;
    return { email_address, password };
  }
}

module.exports = Validation;
