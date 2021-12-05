const express = require("express");

const authorController = require("./controllers/author.controller");
const checkoutController = require("./controllers/checkout.controller");
const sectionsController = require("./controllers/section.controller");
const booksController = require("./controllers/book.controller");

const app = express();

app.use(express.json());

app.use("/sections", sectionsController);
app.use("/books", booksController);
app.use("/authors", authorController);
app.use("/checkout", checkoutController);

module.exports = app;
