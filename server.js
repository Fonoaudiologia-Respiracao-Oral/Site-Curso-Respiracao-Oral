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

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4d87d9cbbad24f",
          pass: "3943ed40180fe5"
        }
    
    });

    let message = transport.sendMail({
        from: '"pessoa teste" <pessoa@teste.com>',
        to: "pucci.rique1234@gmail.com",
        subject: "email com nodemailer",
        text: "email de teste ${nome}",
        html: '<head>\
        <title>Document</title>\
        <style>\
        *{\
            margin: 0;\
            padding: 0;\
        }\
        main_content_border{\
            border: 10px;\
            border-style: solid;\
            border-color: white;\
            border-style: solid;\
        }\
        #main_content{\
            border: 10px;\
            border-style: solid;\
            border-color:#CAE8FF;\
            border-style: solid;\
            background-color: #5CB6F9;\
            display: flex;\
            flex-direction: column;\
            min-height: 100vh;\
        }\
        #central_header{\
            height: 200px;\
            display: flex;\
            justify-content: center;\
            position: relative;\
        }\
        #central_header img{\
            height: 200px;\
        }\
        .center {\
            margin: 50px auto;\
            max-width: 900px;\
            font-family: Arial, sans-serif;\
        }\
        .center_box {\
            margin-bottom: 20px;\
            border-radius: 20px;\
            padding: 5%;\
            background-color: #CAE8FF;\
            box-shadow: 2px 2px 2px #002439;\
        }\
        h1{\
            margin-top: 0;\
            font-size: 33px;\
            margin-bottom: 30px;\
            color: #002439;\
            text-shadow: 2px 2px 2px #6dc0ff;\
        }\
        li{\
            font-size: 25px;\
            color: black;\
            margin-top: 15px;\
            text-align:left;\
            margin-left: 5%;\
            width: 80%;\
            text-shadow: 1px 1px 1px #5CB6F9;\
        }\
        .start_module_container{\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            width: 100%;\
            height: 100px;\
            margin-bottom: 50px;\
            margin-top: 50px;\
        }\
        .start_module_container button{\
            width: 300px;\
            height: 80px;\
            background-color: #002439;\
            color: white;\
            font-size: 20px;\
            border: solid;\
            border-color: #002439;\
            border-radius: 5px;\
            transition: 0.2s;\
        }\
        .start_module_container button:hover{\
            background-color: #002439;\
            box-shadow: 2px 2px 2px #002439;\
            cursor: pointer;\
        }\
        .start_module_container button span{\
            font-size: 90%;\
        }\
        </style>\
        </head>\
        <body>\
            <section id="main_content">\
                <section class="center">\
                    <div class="center_box">\
                        <h1>Solicitação de Certiicado:</h1>\
                        <li>Alguém respondeu ao questionario, e atingiu pontuação acima da média 😢</li>\
                        <li>Para a liberação do certificado, deverá se obter uma pontuação média, ou acima da média no questiónario (acertar 8 ou mais questões).</li>\
                        <li>O certificado será disponibilizado em até 48h em seu email de cadastro no questionário.</li>\
                        <div class="start_module_container">\
                            <a href="/questionario">\
                                <button>\
                                    <span>Iniciar Questionário</span>\
                                </button>\
                            </a>\
                        </div>\
                    </div>\
                </section>\
            </section>\
        </body>\
        </html>\
    '
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