const mongoose = require("mongoose");
const validator = require("validator");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
       
    }, 
    content:{
        type:String,
 
    },
    createdAt: { type: Date, default: Date.now },
})
const Blog = new mongoose.model('Blog',blogSchema);
module.exports = Blog;