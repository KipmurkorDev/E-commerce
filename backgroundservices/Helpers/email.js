const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const mailOptions={
     host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user:'ekipmurkor@gmail.com', 
      pass:'obfytmmvymhdvcxa',  
    },
}

function createTransporter(mailconfig){
    const transporter= nodemailer.createTransport(mailconfig)
    return transporter;
}

const sendEmail= async (messageOption)=>{
    const transporter= createTransporter(mailOptions)
    await transporter.verify()
    await transporter.sendMail(messageOption)
}

module.exports={sendEmail}