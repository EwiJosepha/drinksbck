const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()

const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// Authentication endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if provided credentials match admin credentials
  if (username === adminCredentials.username && password === adminCredentials.password) {
    // Generate admin token
    const adminToken = jwt.sign({ role: 'admin' }, JWT_SECRET);
    res.json({ token: adminToken });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router