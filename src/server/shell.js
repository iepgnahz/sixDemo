/**
 * Created by zhangpei on 16/8/4.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/body",(req,res)=>{
  res.send("hello1" + req.body.name)
});

app.post("/query",(req,res)=>{
  res.send("hello2" + req.query.name)
});

app.post("/param/:name",(req,res)=>{
  res.send("hello3" + req.params.name)
});

app.post("/postBody",(req,res)=>{
  res.send("hello4" + req.body.name)
});

app.post("/get",(req,res)=>{
  res.send("hello5"+req.get("name"))
});

app.get("/path",(req,res)=>{
  res.send("hello6"+req.query.name)
});

app.listen(2000,()=>{
  console.log("listen on 2000");
});