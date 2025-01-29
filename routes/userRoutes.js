const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Save user data
router.post('/', async (req, res) => {
    try {
      console.log('Incoming Data:', req.body); // Log incoming request data
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
      console.error('Error:', error.message); // Log error
      res.status(400).json({ error: error.message });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      console.log('Fetched Data:', users); // Log fetched data
      res.json(users);
    } catch (error) {
      console.error('Error:', error.message); // Log error
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
