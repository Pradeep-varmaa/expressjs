const express = require('express');
const cors = require('cors');
const nodemailer = require('./nodemailer')
const {sql ,connect} = require('./mssql')
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.json({
        msg: 'This is a express api for testing purposes only ',
        status: 200
    }).status(200)
})

app.get('/get', (req, res) => {
    res.json({
        msg: 'This is a express api for testing purposes only ',
        status: 200
    }).status(200)
})

app.post('/', (req, res) => {
    res.json({ msg: ' There is nothing that post route' }).status(200)
})

app.delete('/', (req, res) => {
    res.json({ msg: ' There is nothing that delete route' }).status(200)
})

app.put('/', (req, res) => {
    res.json({ msg: ' There is nothing that put route' }).status(200)
})

app.post('/portfolio/contactform', (req, res) => {

    const {name , email, msg}=req.body

    const msgtext = {
        from: process.env.Email_id,
        to: 'rajeswarchowdary09@gmail.com',
        subject: 'Got a new mail from Portfolio',
        html :`<h3>We got the Data from your Webpage</h3> 
        <p style = 'color: white'> Data submited by the ${name}</p> 
        <h3 style = 'color: white'> Name : ${name} </h3> 
        <h3 style = 'color: white'> Email : ${email} </p></h3>  
        <h3 style = 'color: white'> Suggestion : ${msg} </p></h3>  

        <p>Thanking you, </p> 
        <p>Yours Lovingly</p>
        `
    };

        async function Sendmail(){
            const transport = await nodemailer.connect()

        transport.sendMail(msgtext, (err, info) => {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Email sent successfully:', info.response);
                res.json({msg:'Email sent to Target Mail', status:200})
            }
        });
        }

    Sendmail()
})



app.listen(5005, () => {
    console.log('Server started running at port 5500');
});
