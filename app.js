const express = require("express");
const fs = require('fs');
const bodyparser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/contact", function (req,res) {
    const body = JSON.stringify(req.body)+",\n";
    fs.appendFile(__dirname+"/data/data.txt", body ,function(err){
        if(err) throw err;
        console.log('IS WRITTEN')
    });
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});