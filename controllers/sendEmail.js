const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const nodemailer = require("nodemailer");
module.exports.send_email = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{  // autentikasi pengirim
            user: process.env.senderEmail,
            pass: process.env.senderEmailPass
        }
    })

    // Email config
    const mailOptions = {
        from: process.env.senderEmail,
        to: req.body.email,
        subject: "Testing",
        text: `Sixth test email successfully sent`,
        attachments: [] // berisi attachment file ebook
    }

    // Promise to send email to dest
    transporter
        .sendMail(mailOptions)
        .then(result => {
            console.log("Email successfully sent", result);
        })
        .catch(err => {
            console.log(err);
        })
    next();
}
