const express = require('express');
const path= require('path')
const app = express();
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/referencias", (req, res)=>{
    res.render("referencias");
})

app.get("/fonoaudiologia", (req, res)=>{
    res.render("fonoaudiologia");
})

app.get("/questionario", (req, res)=>{
    res.render("questions");
})

app.get("/questionarioResultadoBaixo", (req, res)=>{
    res.render("questionsLowResult");
})

app.get("/questionarioResultadoAlto", (req, res)=>{
    res.render("questionsHightResult");
})

app.get("/modulo1", (req, res)=>{
    res.render("module1");
})

app.get("/modulo2", (req, res)=>{
    res.render("module2");
})

app.get("/modulo3", (req, res)=>{
    res.render("module3");
})

app.get("/modulo4", (req, res)=>{
    res.render("module4");
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

console.log('js aqui')