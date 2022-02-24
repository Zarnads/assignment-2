const express = require("express");
var bodyParser = require("body-parser");
const app = express();
require("./src/db/conn")
const Blog = require("./src/models/blog");
const path = require("path");

const router = require("./router/routes");
app.use('/',router);


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json());

app.set("view engine","ejs");

app.post('/add',async(req,res)=>{
    console.log(req.body)
    try{
        const blog = new Blog(req.body)
        const createblog = await blog.save();
        res.status(201).send(createblog);
    }catch(e){res.status(400).send(e);}
})

app.listen(8000,()=>{
    console.log('http://localhost:8000');
});
