// for applying the orm to the needs of the reading list

const orm = require("../config/orm.js");

const books = {
  getAll: function(cb) {
    // gets data for all the books
    orm.selectAll("books", cb);
  },
  add: function(title, cb) {
    // adds a new book
    orm.insertOne("books", {title: title}, cb);
  },
  markRead: function(id, cb) {
    // updates was_read to true for a book
    orm.updateOne("books", {id: id}, {was_read: true}, cb);
  },
};

module.exports = books;