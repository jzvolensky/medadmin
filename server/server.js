const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const sanitizeHtml = require('sanitize-html');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.use(helmet()); 


app.get('/', (req, res) => {
    res.send('This is the main page with information and links to subpages.');
});
  
app.get('/terms', (req, res) => {
    res.send('This is the Terms of Service page.');
});
  
app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

const transport = nodemailer.createTransport({
  host: 'smtp.m1.websupport.sk',
  port: 465,
  secure: true, 
  auth: {
    user: 'forms@med-admin.sk',
    pass: process.env.EMAIL_PASSWORD, 
  },
});

function sendEmail(data) {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "forms@med-admin.sk",
      to: "juro.zvolensky@gmail.com",
      subject: 'testing form submitted',
      html: `
        <p>Name: ${data.name}</p>
        <p>Surname: ${data.surname}</p>
        <p>Company Name: ${data.company}</p>
        <p>Email Address: ${data.email}</p>
        <p>Phone Number: ${data.phone}</p>
        <p>Message: ${data.message}</p>
      `,
    };

    console.log(process.env.local);

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Email could not be sent:', error);
        reject('Email could not be sent.');
      } else {
        console.log('Email sent:', info.response);
        resolve('Form submission successful');
      }
    });
  });
}


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  const requiredFields = ['name', 'surname', 'company', 'email', 'phone', 'message'];

  for (const field of requiredFields) {
    if (!formData[field]) {
      return res.status(400).send(`${field} is required.`);
    }
  }

  if (!isValidEmail(formData.email)) {
    return res.status(400).send('Invalid Email Address.');
  }

  if (!/^\d+$/.test(formData.phone)) {
    return res.status(400).send('Invalid Phone Number.');
  }

  const sanitizedFormData = {
    'name': sanitizeHtml(formData['name']),
    'surname': sanitizeHtml(formData['surname']),
    'company': sanitizeHtml(formData['company']),
    'email': sanitizeHtml(formData['email']),
    'phone': sanitizeHtml(formData['phone']),
    'message': sanitizeHtml(formData['message']),
  };

  try {
    const result = await sendEmail(sanitizedFormData);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error); 
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

