require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/food");
const roomRoutes = require("./routes/room");
const foodCatRoutes = require("./routes/foodCategory");
const cors = require("cors");

// express app
const app = express();

app.use(cors());

// MIDLLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/food/category", foodCatRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
