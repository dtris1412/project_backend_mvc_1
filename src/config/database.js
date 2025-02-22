const mysql2 = require("mysql2");
require("dotenv").config();
const conection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = conection;
