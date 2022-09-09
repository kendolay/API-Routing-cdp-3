const express = require("express");
const app = express();

// home page API

app.get("/", (request, response) => {
  response.send("Home Page");
  console.log(response);
});

module.exports = app;

// about page API
app.get("/about", (request, response) => {
  response.send("About Page");
  console.log(response);
});
module.exports = app;
