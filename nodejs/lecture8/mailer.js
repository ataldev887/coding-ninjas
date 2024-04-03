// 1 import nodemailer

const nodemailer = require('nodemailer');

// 2 configure email and send it
async function sendMail(){
    
    //1 create an email transporter
    //2 SMTP(Simple Mail transfer Protocol)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'ataldev887@gmail.com',
            pass:'ihbfzipbughnvzgr',
        },
    });

    const mailOptions = {
        from: 'ataldev887@gmail.com',
        to:'devatal46@gmail.com',
        subject:'Welcome to NodeJs App',
        text: 'This is an email using nodemailer in NodeJS',
    };

    //3 send the email
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    }catch(err){
        console.log('Email send failed with error: '+err);
    }
}

sendMail();