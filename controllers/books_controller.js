// for creating routes

const express = require("express");

const books = require("../models/books.js");

const router = express.Router();

// home page
router.get("/", (req, res) => {
  books.getAll(data => {
    res.render("index", {books: data});
  });
});

// adding a book
router.post("/api/books/new", (req, res) => {
  books.add(req.body.title, result => {
    if (result.affectedRows === 0) {
      // No rows were affected, so there must have been an error.
      return res.status(500).end();
    } else {
      // Rows were affected. Success! Tell to reload home page
      res.status(200).redirect("/");
    }
  });
});

// marking a book as read
router.put("/api/books/:id", (req, res) => {
  books.markRead(req.params.id, result => {
    if (result.changedRows === 0) {
      // No rows were affected, so there must have been an error.
      return res.status(500).end();
    } else {
      // Rows were affected. Success! Tell to reload home page
      res.status(200).end();
    }
  });
});

// deleting a book
router.delete("/api/books/:id", (req, res) => {
  books.delete(req.params.id, result => {
    if (result.affectedRows === 0) {
      // No rows were affected, so there must have been an error.
      return res.status(500).end();
    } else {
      // Rows were affected. Success! Tell to reload home page
      res.status(200).end();
    }
  });
});

module.exports = router;