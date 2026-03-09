// In-memory data store (no database needed for this demo)
let items = [
  { id: 1, name: "Learn Docker", status: "completed", createdAt: new Date() },
  { id: 2, name: "Build CI/CD Pipeline", status: "in-progress", createdAt: new Date() },
  { id: 3, name: "Deploy to Production", status: "pending", createdAt: new Date() },
];

let nextId = 4;

// GET all items
const getItems = (req, res) => {
  res.status(200).json({
    success: true,
    count: items.length,
    data: items,
  });
};

// GET single item
const getItemById = (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  res.status(200).json({ success: true, data: item });
};

// POST create item
const createItem = (req, res) => {
  const { name, status } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Name is required" });
  }
  const newItem = {
    id: nextId++,
    name,
    status: status || "pending",
    createdAt: new Date(),
  };
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
};

// PUT update item
const updateItem = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  items[index] = { ...items[index], ...req.body };
  res.status(200).json({ success: true, data: items[index] });
};

// DELETE item
const deleteItem = (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  items.splice(index, 1);
  res.status(200).json({ success: true, message: "Item deleted" });
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };