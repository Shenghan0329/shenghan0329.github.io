const express = require("express");
const fs = require('fs');
const bodyparser = require('body-parser')
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});