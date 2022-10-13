var mysql = require("mysql2");

export const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2002",
  database: "exam2",
  port: 3306

});



