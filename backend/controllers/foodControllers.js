const mongoose = require("mongoose");
const Food = require("../models/foodModel");

// GET FOODS
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({}).sort({ createdAt: -1 });
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json(error);
  }
};

// CREATE FOOD
const createFood = async (req, res) => {
  const { name, category, price } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  const nameExists = await Food.findOne({ name });

  if (nameExists) {
    return res.status(400).json({ error: "Food already exists" });
  }
  try {
    const food = await Food.create({ name, category, price });
    res.status(200).json(food);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateFood = async (req, res) => {
  const { id } = req.params;
  const { name, category, price } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such food" });
  }

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  const updatedFood = await Food.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updatedFood) {
    return res.status(400).json({ error: "food not found" });
  }

  res.status(200).json({ updatedFood });
};

const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such food" });
  }


  const deletedFood = await Food.findByIdAndDelete({ _id: id });

  if (!deletedFood) {
    return res.status(400).json({ error: "food not found" });
  }

  res.status(200).json({ deletedFood });
};

module.exports = { createFood, getFoods, updateFood, deleteFood };
