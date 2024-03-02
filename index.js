const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const connectdb = require('./db/db');
const User = require('./models/users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectdb();

//Routes

app.post('/register', async (req, res) => {
  try {
    // Destructure request body data
    const {
      name,
      fatherName,
      dateOfBirth,
      gender,
      cnic,
      address,
      qualification,
      subject,
      completionYear,
      universityCollege,
      email,
      password
    } = req.body;

    // Check for existing user with email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: 'User already registered' });
    }

    // Hash password securely
    const saltRounds = 10; // Adjust based on security needs
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save new user
    const newUser = new User({
      name,
      fatherName,
      dateOfBirth,
      gender,
      cnic,
      address,
      qualification,
      subject,
      completionYear,
      universityCollege,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // Send successful registration response
    res.status(201).send({ message: 'Successfully registered!' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send({ message: 'Registration failed. Please try again later.' });
  }
});

app.listen(8080, () => {
  console.log('server is walking on port 8080');
});