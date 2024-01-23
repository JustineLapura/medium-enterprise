const express = require("express");

const router = express.Router();
const {
  createRoom,
  getRooms,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomControllers");

// GET Rooms
router.get("/", getRooms);

// Add Room
router.post("/", createRoom);

// UPDATE Room
router.put("/:id", updateRoom);

// DELETE Room
router.delete("/:id", deleteRoom);

module.exports = router;
