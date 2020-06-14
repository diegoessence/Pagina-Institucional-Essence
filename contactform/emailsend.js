

  function email_send(subject, message, email, name, empresa) {
  //window.alert(document.getElementById('subject').value)
   
  var subjectValue = document.getElementById('subject').value;
  var messageValue = document.getElementById('message').value;
  var emailValue = document.getElementById('email').value;
  var nameValue = document.getElementById('name').value;
  var empresaValue = document.getElementById('empresa').value;
 
  const nodemailer = require("nodemailer")
 console.alert('Passei2')
  let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      //secure = true,
      auth: {
          user: "contato.site@assessoriaessence.com.br",
          pass: "@Site103020"
      }
  })

  window.alert('Passei3')

  transporter.sendMail({
      from: `Contato Site - ${empresaValue} <contato.site@assessoriaessence.com.br>`,
      to: "comercial@assessoriaessence.com.br",
      subject: subjectValue,
      html: `Nome: ${nameValue} <br> Empresa: ${emempresaValuepresa} <br> e-mail: ${emailValue} <br> ${messageValue}`
      //text: text
    
  }).then(message => {
     console.log(message)
  }).catch(err => {
      console.log(err)
  })  


  var send = email_send('Alvara de vigilancia sanitaria',
          'Olá me chamo patricia e gosta de mais informações sobre alvará',
          'paricia@uol.com.br',
          'Patricia Santos',
          'Beluga')

}