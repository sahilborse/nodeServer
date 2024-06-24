const express = require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));  // use to take input from any route to server through //// 
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
}) 
app.post("/",function( req,res){
  
    var result=parseInt(req.body.num1)  +parseInt( req.body.num2);
    res.send("The Calculation is" + result);
})
app.get("/bm",function(req,res){
    res.sendFile(__dirname +"/BMI.html");
})
app.post("/bmi.html",function(req,res){
    var result=parseFloat(req.body.n1)/parseFloat(req.body.n2)
    res.send("The BMI index is" + result)
});
app.listen(3000,function(){
    console.log("We have made an decision");
});