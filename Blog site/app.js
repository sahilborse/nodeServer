const express= require("express");
const app=express();
const ejs=require("ejs");
const bodyParser=require("body-parser");
var basic=[];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
const master1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ullam, porro quis adipisci fugiat amet temporibus at eligendi aperiam illum. Voluptatum ratione commodi esse illum rerum in ipsa repellendus nisi!";
const master2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quam necessitatibus dignissimos corporis corrupti, at dolores eaque facilis ipsa nostrum ipsam. Dolorum eligendi voluptas perferendis quisquam tempore labore optio eveniet."
 
app.get("/",function(req,res){
   res.render("home",{firstLorum:master1,basicList:basic})
})
app.get("/about",function(req,res){
    res.render("about",{secondLorum:master2})
})
app.get("/compose",function(req,res){
    res.render("compose",{basicList:basic})
})
app.post("/compose",function(req,res){
    let publish=req.body.input1;
    basic.push(publish)
    res.redirect("/")
});
app.listen(3000,()=>{console.log("It is working")});