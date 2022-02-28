const express = require("express");
var bodyParser = require("body-parser");
const mysql = require('mysql')
const app = express();

const path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

const router = require("./router/routes");
app.use('/', router);

app.listen(8000, () => {
    console.log('http://localhost:8000');
});





