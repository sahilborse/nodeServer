//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
    var fname=req.body.Fname;
    var lname=req.body.lname;
    var email=req.body.email;
    console.log(fname,lname,email)
})
app.get("/",function(req,res){
   
  res.sendFile(__dirname+"/signup.html");
});
app.listen(3000,function(){
    console.log("This works and run on 3000")
})