// for connecting to database

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "reading_list_db"
});

connection.connect(err => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Database connected with id " + connection.threadId);
});

module.exports = connection;