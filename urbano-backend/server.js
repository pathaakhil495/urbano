const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema and model
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  location: String,
  serviceType: String,
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Define routes
app.post('http://localhost:3000/', async (req, res) => {
  try {
    console.log('connexted')
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});
