const express = require('express');
const path= require('path');
const nodemailer = require('nodemailer');
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

app.get("/questionarioResultadoAlto", async (req, res)=>{

    res.render("questionsHightResult");
    console.log('oi');

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4d87d9cbbad24f",
          pass: "3943ed40180fe5"
        }
    
    });

    let message = await transport.sendMail({
        from: '"pessoa teste" <pessoa@teste.com>',
        to: "pucci.rique1234@gmail.com",
        subject: "email com nodemailer",
        text: "email de teste",
        html: "<p>um email de teste</p>"
    });
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

app.get("/comecarQuestionario", (req, res)=>{
    res.render("questionsStart");
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

console.log('js aqui')