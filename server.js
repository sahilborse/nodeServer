const express=require("express");// such import is done in backend
const app = express(); //It is an function representing express module
// const port = 3000


//// for HOME page
app.get("/",function(req,res){
  res.send("hello");   // similar like echo in php 
});


//// for CONTACT page
app.get("/contact",function(req,res){
    res.send("Contact me:@ sahil borse")
});
app.listen(9000,function(){
    console.log("Server started on port 3000");
});  // it is an inbuilt function for listening to channel at 3000