const { response } = require("express");
const DataBase = require("../Config/db");
// const { use } = require("../Routes/userRouts");
// const DB = require("../Config/db");

class UserModel {
  #DataBase = new DataBase();
  async addUser(data) {
    const value = {
      first_name: data.firstName,
      last_name: data.lastName,
      age: data.age,
      phone_number: data.phoneNumber,
      email_address: data.email,
      role_id: data.role_id,
      password: data.password,
    };
    // console.log(value);
    const checkEmail = await new DataBase().getData(
      `SELECT * FROM School.Users WHERE email_address='${value.email_address}'`
    );
    if (checkEmail.length) {
      throw new Error(
        "Email Already Exist Please Enter Different Email Address"
      );
    }
    const checkPhone = await new DataBase().getData(
      `SELECT * FROM Users WHERE phone_number='${value.phone_number}'`
    );
    if (checkPhone.length) {
      throw new Error(
        "Phone Number Already Exist Please Enter Different Phone Number"
      );
    }
    const columns = Object.keys(value).join(", ");
    const values = Object.values(value);

    const plaseHolder = values.map(() => "?").join(", ");
    // console.log(values);
    // console.log(columns);
    const query = `INSERT INTO School.Users (${columns}) VALUES (${plaseHolder})`;

    const restul = await new DataBase().insertData(query, values);
    const { insertId } = restul;
    const user = await new DataBase().getData(
      `SELECT * FROM School.Users WHERE id='${insertId}'`
    );
    return user;
  }
  async getUser(value) {
    console.log(data);
    const user = await this.#DataBase.getData(
      `SELECT * FROM School.Users Where `
    );
  }
}

module.exports = UserModel;
