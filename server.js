const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'build')));

// Mock data storage (in production, use a database)
let quoteRequests = [];
let appointments = [];

// Email configuration (configure with your email service)
const transport = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// API Routes

// Get all quote requests
app.get('/api/quotes', (req, res) => {
  res.json(quoteRequests);
});

// Submit new quote request
app.post('/api/quotes', (req, res) => {
  const quoteData = {
    ...req.body,
    id: Date.now(),
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  };
  
  quoteRequests.push(quoteData);
  
  // Send email notification to business
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'business@mastersautodetail.com',
    subject: 'New Quote Request - Master\'s Auto Detail',
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${quoteData.name}</p>
      <p><strong>Phone:</strong> ${quoteData.phone}</p>
      <p><strong>Email:</strong> ${quoteData.email}</p>
      <p><strong>Vehicle Size:</strong> ${quoteData.vehicleSize}</p>
      <p><strong>Service Type:</strong> ${quoteData.serviceType}</p>
      <p><strong>Preferred Date:</strong> ${quoteData.preferredDate}</p>
      <p><strong>Message:</strong> ${quoteData.message}</p>
      <p><strong>Submitted:</strong> ${quoteData.date}</p>
    `
  };
  
  // Send confirmation email to customer
  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: quoteData.email,
    subject: 'Quote Request Received - Master\'s Auto Detail',
    html: `
      <h2>Thank You for Your Quote Request!</h2>
      <p>Hi ${quoteData.name},</p>
      <p>We've received your quote request for ${quoteData.serviceType} on your ${quoteData.vehicleSize} vehicle.</p>
      <p>Our team will review your request and contact you shortly with a detailed quote and available appointment times.</p>
      <p>If you have any questions, please don't hesitate to call us at (530) 321-2936.</p>
      <p>Best regards,<br/>The Master's Auto Detail Team</p>
    `
  };
  
  // Send emails (comment out for development without email setup)
  /*
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending business email:', error);
    }
  });
  
  transporter.sendMail(customerMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending customer email:', error);
    }
  });
  */
  
  res.json({ success: true, message: 'Quote request submitted successfully' });
});

// Update quote status
app.put('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const quoteIndex = quoteRequests.findIndex(q => q.id == id);
  if (quoteIndex !== -1) {
    quoteRequests[quoteIndex].status = status;
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Quote not found' });
  }
});

// Delete quote request
app.delete('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  quoteRequests = quoteRequests.filter(q => q.id != id);
  res.json({ success: true });
});

// Get appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Create appointment
app.post('/api/appointments', (req, res) => {
  const appointment = {
    ...req.body,
    id: Date.now(),
    createdAt: new Date().toISOString()
  };
  appointments.push(appointment);
  res.json({ success: true, appointment });
});

// Get services
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: 'Basic Detail', description: 'Exterior wash, interior cleaning, wax', price: 195 },
    { id: 2, name: 'Full Detail', description: 'Complete restoration with paint correction', price: 395 },
    { id: 3, name: 'Ceramic Coating', description: 'Long-term ceramic protection', price: 500 },
    { id: 4, name: 'Headlights Restoration', description: 'Restore headlight clarity', price: 26 },
    { id: 5, name: 'Spot Cleaning', description: 'Target specific stains', price: 35 },
    { id: 6, name: 'Deep Shampoo Cleaning', description: 'Deep clean carpets and upholstery', price: 100 }
  ]);
});

// Get pricing
app.get('/api/pricing', (req, res) => {
  res.json([
    { size: 'Extra Small', basicPrice: 159, fullPrice: 359 },
    { size: 'Small', basicPrice: 195, fullPrice: 395 },
    { size: 'Medium', basicPrice: 249, fullPrice: 449 },
    { size: 'Large', basicPrice: 339, fullPrice: 539 },
    { size: 'Extra Large', basicPrice: 429, fullPrice: 629 }
  ]);
});

// Admin authentication (simple implementation for demo)
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple authentication (in production, use proper authentication)
  if (username === 'admin' && password === 'masters2024') {
    res.json({ success: true, token: 'demo-token' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Admin credentials: username: admin, password: masters2024`);
});
