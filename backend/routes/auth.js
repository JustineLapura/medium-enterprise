const express = require("express");
const {
  getUsers,
  registerUsers,
  loginUsers,
} = require("../controllers/authControllers");

const router = express.Router();

// GET Users
router.get("/", getUsers);

// REGISTER Users
router.post("/register", registerUsers);

// LOGIN Users
router.post("/login", loginUsers);

module.exports = router;
