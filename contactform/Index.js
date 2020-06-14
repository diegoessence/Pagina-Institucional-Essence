import { createTransport } from "nodemailer"

let transporter = createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure = true,
    auth: {

        user: "contato.site@assessoriaessence.com.br",
        pass: "@Site103020"
    }
})

transporter.sendMail({
    from: "Diego Quaresma <contato.site@assessoriaessence.com.br>",
    to: "comercial@assessoriaessence.com.br",
    subject: "Olá Sou diego Quaresma e estatou enviando o primero email pelo node",
    text: "Olá Sou diego Quaresma e estatou enviando o primero email pelo node"
    //html:
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})
 