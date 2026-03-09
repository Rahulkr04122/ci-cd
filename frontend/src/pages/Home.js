import React, { useState, useEffect } from "react";
import { getItems, createItem, updateItem, deleteItem } from "../services/api";
import ItemCard from "../components/ItemCard";
import AddItemForm from "../components/AddItemForm";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getItems();
      setItems(data.data);
      setError(null);
    } catch (err) {
      setError("Cannot connect to backend. Make sure it is running!");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (item) => {
    try {
      const data = await createItem(item);
      setItems([...items, data.data]);
    } catch (err) {
      setError("Failed to add item");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError("Failed to delete item");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const data = await updateItem(id, { status });
      setItems(items.map((item) => (item.id === id ? data.data : item)));
    } catch (err) {
      setError("Failed to update item");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Task Manager</h1>
        <p style={styles.subtitle}>React + Node.js + Docker + CI/CD</p>
      </div>
      {error && <div style={styles.error}>⚠️ {error}</div>}
      <AddItemForm onAdd={handleAdd} />
      {loading ? (
        <div style={styles.loading}>Loading tasks...</div>
      ) : (
        <div>
          <h2 style={styles.sectionTitle}>Tasks ({items.length})</h2>
          {items.length === 0 ? (
            <p style={styles.empty}>No tasks yet. Add one above!</p>
          ) : (
            items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: "800px", margin: "0 auto", padding: "30px 20px" },
  header: { textAlign: "center", marginBottom: "40px" },
  title: { color: "#e94560", fontSize: "42px", margin: 0 },
  subtitle: { color: "#888", fontSize: "16px" },
  error: {
    backgroundColor: "#e9456020",
    border: "1px solid #e94560",
    color: "#e94560",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  loading: { color: "#888", textAlign: "center", fontSize: "18px", padding: "40px" },
  sectionTitle: { color: "#ffffff", marginBottom: "20px" },
  empty: { color: "#888", textAlign: "center", padding: "40px" },
};

export default Home;