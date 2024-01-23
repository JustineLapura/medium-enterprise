const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

// Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Register user
const registerUsers = async (req, res) => {
  const {
    businessName,
    password,
    email,
    businessNumber,
    category,
    address,
    businessPermit,
  } = req.body;

  if (
    !businessName ||
    !email ||
    !password ||
    !businessNumber ||
    !category ||
    !address
  ) {
    return res.status(400).json({ error: "You must fill in all the fields" });
  }

  const businessNameExists = await User.findOne({ businessName });
  const emailExists = await User.findOne({ email });

  if (businessNameExists) {
    return res.status(400).json({ error: "businessName already in use" });
  }

  if (emailExists) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password not strong enough" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      businessName,
      password: hashedPassword,
      email,
      businessNumber,
      category,
      address,
      businessPermit,
    });

    const token = createToken(user._id);
    res.status(200).json({ mssg: "Successfuly registered", user, token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: "Failed to create user. Please try again" });
  }
};

const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Incorrect email." });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log(password, user.password);
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = createToken(user._id);
    res.status(200).json({ mssg: "Successfuly logged in", user, token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { getUsers, registerUsers, loginUsers };
