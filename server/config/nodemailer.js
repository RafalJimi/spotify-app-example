const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD,
          },
});
