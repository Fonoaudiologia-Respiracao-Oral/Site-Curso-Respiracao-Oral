const express = require('express');
const app = express();
app.use(express.static('public'))

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("pages/home");
})

app.get("/referencias", function(req, res){
    res.render("pages/referencias");
})

app.get("/fonoaudiologia", function(req, res){
    res.render("pages/fonoaudiologia");
})

app.get("/modulo1", function(req, res){
    res.render("pages/module1");
})

app.get("/modulo2", function(req, res){
    res.render("pages/module2");
})

app.get("/modulo3", function(req, res){
    res.render("pages/module3");
})

app.get("/modulo4", function(req, res){
    res.render("pages/module4");
})
app.listen(8080);
console.log("Server is running");