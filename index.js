const express = require("express");
var bodyParser = require("body-parser");
const mysql = require('mysql')
const app = express();

const path = require("path");

const router = require("./router/routes");
app.use('/', router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.set("view engine", "ejs");

app.listen(8000, () => {
    console.log('http://localhost:8000');
});
