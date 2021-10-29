const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
module.exports.send_email = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{  // autentikasi pengirim
            user: process.env.senderEmail,
            pass: process.env.senderEmailPass
        }
    })

    // Pointing to template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve("D:/registration-form/back-end/views/"),
            defaultLayout: false,
        },
        viewPath: path.resolve("D:/registration-form/back-end/views/")
    };

    // Using template file with nodemailer
    transporter.use("compile", hbs(handlebarOptions));

    // Email config
    const mailOptions = {
        from: process.env.senderEmail,
        to: req.body.email,
        subject: "Free Ebook",
        template: "email",
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
