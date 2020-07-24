// for creating routes

const express = require("express");

const router = express.Router();

// super simple route for testing setup
router.get("/", (req, res) => {
  res.render("index", {title: "Reading List"});
});

module.exports = router;