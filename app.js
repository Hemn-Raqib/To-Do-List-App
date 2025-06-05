const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
//this line under this comment is use for sending the css code
// and ( styles.css ) file inside ( public ) folder to the server  
//that hosted in ( localhost:3000).
app.use(express.static("public"));
const items=["Buy Food","Cook Food","Eat Food"];
const workitems=[];

app.get("/",function(req,res){
  const day = date.getdate(); 

    res.render("list.ejs",{listtitle:day,newlistitems:items});
});
app.post("/",function(req,res)
{
  const item=req.body.newitem;
  if(req.body.list === "work")
  {
    workitems.push(item);
    res.redirect("/work");
  }
  else{

    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res)
{
  res.render("list.ejs",{listtitle:"Work List",newlistitems:workitems});
});



app.get("/about",function(req,res)
{
  res.render("about");
});



app.listen(3000,function()
{
console.log("server run on port 3000");
});
