const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config({ path: '.env.local' });
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Handle CORS
app.use(helmet()); // Add security headers

dotenv.config();

app.get('/', (req, res) => {
    res.send('This is the main page with information and links to subpages.');
});
  
app.get('/terms-of-service', (req, res) => {
    res.send('This is the Terms of Service page.');
});
  
app.get('/privacy-policy', (req, res) => {
    res.send('This is the Privacy Policy page.');
});
// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail' or use SMTP settings
  auth: {
    user: process.env.EMAIL_ADDRESS, // your email address
    pass: process.env.EMAIL_PASSWORD, // your email password
  },
});

// Function to send email
function sendEmail(data) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS, // sender's email address
    to: process.env.REC_EMAIL_ADDRESS, // recipient's email address
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email could not be sent:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const requiredFields = ['Meno', 'Priezvisko', 'Názov PZS', 'Email', 'Telefón', 'Správa'];
 
  for (const field of requiredFields) {
    if (!formData[field]) {
      return res.status(400).send(`${field} is required.`);
    }
  }

  if (!isValidEmail(formData.correo)) {
    return res.status(400).send('Invalid Email Address.');
  }
  
  const sanitizedFormData = {
    'Meno': sanitizeHtml(formData['Meno']),
    'Priezvisko': sanitizeHtml(formData['Priezvisko']),
    'Názov PZS': sanitizeHtml(formData['Názov PZS']),
    'Email': sanitizeHtml(formData['Email']),
    'Telefón': sanitizeHtml(formData['Telefón']),
    'Správa': sanitizeHtml(formData['Správa']),
  };
  
  sendEmail(sanitizedFormData);

  res.status(200).send('Form submission successful');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

