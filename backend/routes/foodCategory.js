const express = require("express");

const router = express.Router();

const {
  createFoodCategory,
  getFoodCategories,
} = require("../controllers/foodCatControllers");

// GET Categories
router.get("/", getFoodCategories);

// ADD Food Category
router.post("/", createFoodCategory);

module.exports = router;
