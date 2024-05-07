const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Replace these with your email credentials
const transporter = nodemailer.createTransport({
    service: 'outlook.com',
    auth: {
        user: 'lukes-swings@hotmail.com',
        pass: 'Lukessw1ngs'
    }
});

app.post('/notify', (req, res) => {
    const { name, datetime } = req.body;
    const mailOptions = {
        from: 'lukes-swings@hotmail.com',
        to: 'ballingalllj24@greyhigh.school.nz',
        subject: 'swing_rented',
        text: `Name: ${name}\nDate and Time: ${datetime}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Failed to send notification.');
        } else {
            console.log('Email sent:', info.response);
            res.sendStatus(200);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${465} && ${587}`);
});
