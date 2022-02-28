const express = require("express");
const { route } = require("express/lib/application");
var bodyParser = require("body-parser");
const router = express.Router();
const mysql = require('mysql');
const { response } = require("express");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

router.get("/new", (req, res) => {
    res.render('new')
})

// connecton start
const connection = mysql.createConnection({
    host: '15.206.7.200',
    port: "3310",
    user: 'zarnas',
    password: '9XB7bCWfgJqKyjRtGZ4vvfM68RunVWc5',
    database: 'zarnas'

})
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");
})
// connection end

router.get('/', function (req, res) {
    let sql = "SELECT * FROM blogs";
    connection.query(sql, function (error, result) {
        if (error) { throw error; }
        res.render("index2", { data: result });
    });
    console.log("displayed on 8000")
});

router.get("/all/:id", (req, res) => {
    let bid = req.params.id;
    let sql = `SELECT * FROM blogs WHERE id=${bid}`;
    connection.query(sql, function (error, result) {
        if (error) { throw error; }
        res.render("show", { data: result });
    });
});
    router.get("/cat/s", (req, res) => {
        let sql = "SELECT * FROM blogs WHERE c_id='sports'";
        connection.query(sql, function (error, result) {
            if (error) { throw error; }
            res.render("show", { data: result });
        });

    });

    router.get("/cat/m", (req, res) => {
        let sql = "SELECT * FROM blogs WHERE c_id='music'";
        connection.query(sql, function (error, result) {
            if (error) { throw error; }
            res.render("show", { data: result });
        });

    });
    router.get("/cat/:id", (req, res) => {
        let bid = req.params.id;
        let sql = `SELECT * FROM blogs WHERE id=${bid}`;
        connection.query(sql, function (error, result) {
            if (error) { throw error; }
            res.render("show", { data: result });
        });
    });

    router.post("/add", function (req, res) {
        var sql = "INSERT INTO blogs (title,content,c_id) VALUES ?";
        var values = [[req.body.title, req.body.content,req.body.category]]
        console.log(req.body.category);
        connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("record inserted" + result.affectedRows)

        });
    });




module.exports = router;