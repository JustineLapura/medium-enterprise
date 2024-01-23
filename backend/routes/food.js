const express = require("express");

const router = express.Router();
const {
  createFood,
  getFoods,
  updateFood,
  deleteFood,
} = require("../controllers/foodControllers");

// GET Foods
router.get("/", getFoods);

// Add Food
router.post("/", createFood);

// UPDATE Food
router.put("/:id", updateFood);


// DELETE Food
router.delete("/:id", deleteFood);

module.exports = router;
