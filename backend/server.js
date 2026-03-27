const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your actual connection string in your .env file later
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Cluster0"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// User Schema (From Class Diagram)
const userSchema = new mongoose.Schema({
  name: String,
  regNumber: { type: String, unique: true },
  phone: String,
  points: { type: Number, default: 0 },
  tier: { type: String, default: 'Silver' }
});

const User = mongoose.model('User', userSchema);

// Registration Endpoint (US.01)
app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Registration failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
