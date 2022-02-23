const mongoose = require("mongoose");

mongoose.connect("mongodb://15.206.7.200:28017/blog")
mongoose.connection.once("open",function(){
    console.log("success");
}).on('error',function(error){
    console.log('error is:',error);
});
