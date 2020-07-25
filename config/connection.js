// for connecting to database

const mysql = require("mysql");

const MYSQL_URL = process.env.JAWSDB_URL || "mysql://root:password@localhost:3306/reading_list_db";

const connection = mysql.createConnection(MYSQL_URL);

connection.connect(err => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Database connected with id " + connection.threadId);
});

module.exports = connection;