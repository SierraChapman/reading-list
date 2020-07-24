// for creating the server

const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers/books_controller.js");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});