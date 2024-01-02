const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Faizan@123#$smTY",
  database: "School",
});
class DataBase {
  async insertData(query, values) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query(query, values, (err, res) => {
        if (err) {
          throw new Error(err);
        }
        resolve(res);
      });
    });
  }
  async getData(query) {
    return new Promise((resolve, reject) => {
      mysqlConnection.query(query, (err, res) => {
        if (err) {
          throw new Error(err);
        }
        resolve(res);
      });
    });
  }
}
module.exports = DataBase;
