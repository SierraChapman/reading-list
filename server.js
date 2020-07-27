// for creating the server

// import dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers/books_controller.js");

// create the app
const app = express();
const PORT = process.env.PORT || 8080;

// parse data sent in requests
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// send public file
app.use(express.static("./public"));

// use handlebars templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// add routes
app.use(routes);

// listen
app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});