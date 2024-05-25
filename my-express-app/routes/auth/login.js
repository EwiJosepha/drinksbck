const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()

const adminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// // Authentication endpoint
// router.post('/', (req, res) => {
//   const { username, password } = req.body;
//   const token = req.body.token
//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).send("invalid token")
//     }

//     if (decoded) {
//       res.json({ message: "authentication sucessful" })
//     }

//   })

//   // // Check if provided credentials match admin credentials
//   // if (username === adminCredentials.username && password === adminCredentials.password) {
//   //   // Generate admin token
//   //   const adminToken = jwt.sign({ role: 'admin' }, JWT_SECRET);
//   //   res.json({ token: adminToken });
//   // } else {
//   //   res.status(401).json({ error: 'Invalid credentials' });
//   // }
// });

router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

module.exports = router