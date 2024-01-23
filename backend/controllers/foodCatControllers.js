const FoodCategory = require("../models/foodCategory");

const createFoodCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(200).json({ error: "field required" });
  }

  const categoryExists = await FoodCategory.find({ name });

  if (categoryExists) {
    return res.status(200).json({ error: "Category name already exists" });
  }

  try {
    const foodCat = await FoodCategory.create(req.body).sort({ createAt: -1 });
    res.status(200).json(foodCat);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getFoodCategories = async (req, res) => {
  try {
    const categories = await FoodCategory.find({}).sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(200).json(error);
  }
};

module.exports = { createFoodCategory, getFoodCategories };
