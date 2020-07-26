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

  insertOne: function(tableName, data, cb) {
    // inserts a row with provided data to the table identified by tableName
    connection.query("INSERT INTO ?? SET ?", [tableName, data], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableName, whereCondition, newData, cb) {
    // update the row in tableName satisfying whereCondition (object with columnName-value pair)
    // with provided newData (object of form {columnName: newValue})
    connection.query("UPDATE ?? SET ? WHERE ?", [tableName, newData, whereCondition], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;