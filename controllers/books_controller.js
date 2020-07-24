// for creating routes

const express = require("express");

const books = require("../models/books.js");

const router = express.Router();

// super simple route for testing setup
router.get("/", (req, res) => {
  books.getAll(data => {
    res.render("index", {books: data});
  });
});

module.exports = router;