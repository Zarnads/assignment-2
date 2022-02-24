const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index2");
})
router.get("/new",(req,res)=>{
    res.render('new')
})

router.get("/category",(req,res)=>{
    res.render('category')
})

router.get("/post",(req,res)=>{
    res.render('post')
})
router.post('/add',async(req,res)=>{
    console.log(req.body)
    try{
        const blog = new Blog(req.body)
        const createBlog = await blog.save();
        res.status(201).send(createBlog);
    }catch(e){res.status(400).send(e);}
})



module.exports = router;