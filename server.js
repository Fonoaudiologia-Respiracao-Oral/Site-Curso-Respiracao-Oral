const express = require('express');
const path= require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 8080
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


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
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'pucci.rique1234@gmail.com', // Change to your recipient
        from: 'respiracaooral@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
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

app.get("/comecarQuestionario", (req, res)=>{
    res.render("questionsStart");
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

console.log('js aqui')