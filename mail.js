
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

/*
const auth = {
    auth: {
        api_key: process.env.API_KEY ||  '5360e605f07b93e4e01da8e83cbcaf6c', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || 'asessoriaessence.com.br' // TODO: Replace with your mailgun DOMAIN
    }
};
*/
//const transporter = nodemailer.createTransport(mailGun(auth));

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    //secure = true,
    auth: {
        user: "contato.site@assessoriaessence.com.br",
        pass: "@Site103020"
    }
})

var x = "comercial@assessoriaessence.com.br"

const sendMail = (email, subject, text, name, empresa, cb) => {
    const mailOptions = {
        from: 'Contato através site <contato.site@assessoriaessence.com.br>', // TODO replace this with your own email
        to: "comercial@assessoriaessence.com.br",   // TODO: the receiver email has to be authorized for the free tier
        subject,
        html: `Nome: ${name} <br> Empresa: ${empresa} <br> e-mail: ${email} <br> <br> ${text}`,     
    };


    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
