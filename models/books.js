// for applying the orm to the needs of the reading list

const orm = require("../config/orm.js");

const books = {
  getAll: function(cb) {
    // gets data for all the books
    orm.selectAll("books", cb);
  },
  // add -- adds a new book
  // markRead -- updates was_read to true for a book
};

module.exports = books;