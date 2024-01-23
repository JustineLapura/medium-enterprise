const mongoose = require("mongoose");
const Room = require("../models/roomModel");

// GET Rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({}).sort({ createdAt: -1 });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json(error);
  }
};

// CREATE Room
const createRoom = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Room field required" });
  }

  const nameExists = await Room.findOne({ name });

  if (nameExists) {
    return res.status(400).json({ error: "Room already exists" });
  }
  try {
    const room = await Room.create({ name });
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateRoom = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such Room" });
  }

  if (!name) {
    return res.status(400).json({ error: "Room field required" });
  }

  const updatedRoom = await Room.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updatedRoom) {
    return res.status(400).json({ error: "Room not found" });
  }

  res.status(200).json({ updatedRoom });
};

const deleteRoom = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such room" });
  }

  const deletedRoom = await Room.findByIdAndDelete({ _id: id });

  if (!deletedRoom) {
    return res.status(400).json({ error: "room not found" });
  }

  res.status(200).json({ deletedRoom });
};

module.exports = { createRoom, getRooms, updateRoom, deleteRoom };
