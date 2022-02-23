const express = require("express");
const app = express();
require("./src/db/conn")
const Blog = require("./src/models/blog");
const path = require("path");

app.use(express.json());

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/new",(req,res)=>{
    res.render('new')
})
app.post('/add',(req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body)

    blog.save().then(()=>{
        res.status(201);
        res.send(blog);
    }).catch((e)=>{
        res.status(400);
        res.send(e);
    })
    
})

app.listen(2000);
