const express = require("express");
const router = express.Router();
const {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/dataController");

// GET all items
router.get("/items", getItems);

// GET single item
router.get("/items/:id", getItemById);

// POST create item
router.post("/items", createItem);

// PUT update item
router.put("/items/:id", updateItem);

// DELETE item
router.delete("/items/:id", deleteItem);

module.exports = router;