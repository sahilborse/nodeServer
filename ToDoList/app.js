const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=[];

// EJS setup with express///
app.set('view engine','ejs');
//EJS setup End//;

app.use(bodyParser.urlencoded({extended:true}));
var today=new Date();  // using class date to get current date
app.get("/",(req,res)=>{
    

    var option={
        day:'2-digit',
        month:'long',
        year:'numeric'
    }
    var day=today.toLocaleDateString("en-US",option);

    res.render("list",{week:day,addUp:items});
    
})
app.post("/",function(req,res){
    items.push(req.body.nextToDo);
    res.redirect("/");
})



app.listen(3000,()=>{
    console.log("server is working");
}) 