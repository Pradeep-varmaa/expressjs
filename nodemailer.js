const nodemailer = require('nodemailer');
require('dotenv').config()

// Create a reusable transporter
async function connect() {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email_id,
                pass: process.env.Email_pass // App password, not your real Gmail password
            }
        });
        return transporter; // ✅ return it!
    } catch (err) {
        console.log('Error creating transporter:', err);
    }
}

// const msgtext = {
//     from: 'ppvarmajobs@gmail.com',
//     to: 'hekav26481@potatod.com',
//     subject: 'Test mail',
//     text: 'Hello'
// };

// async function Sendmail() {
//     const transport = await connect();
//     transport.sendMail(msgtext, (err, info) => {
//         if (err) {
//             console.log('Error:', err);
//         } else {
//             console.log('Email sent successfully:', info.response);
//         }
//     });
// }

module.exports = {connect};
