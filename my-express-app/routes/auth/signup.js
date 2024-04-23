const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const bcrypt = require("bcrypt")
// const cryptoRandomString = require('crypto-random-string');

const users = []
// const key = cryptoRandomString({ length: 32 });
// console.log('Random key:', key);

router.post("/", async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      password
    } = req.body

    console.log(req.body);

    const foundUser = users.find((usersEmail) => usersEmail === email)
    if (foundUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10)

    const newUser = {
      // id:users.length + 1,
      firstname,
      lastname,
      email,
      phoneNumber,
      password: hashedpassword
    }

    users.push(newUser)
    const token = jwt.sign({ userId: newUser.id }, jJWT_SECRET, {
      expiresIn: "5days"
    })


    console.log("avalaible users", users);
    res.status(201).json({ token })
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})

module.exports = router