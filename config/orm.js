// for interacting with database

const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName, cb) {
    // gets all data in the table identified by tableName and calls cb on the result
    connection.query("SELECT * FROM ??", tableName, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;