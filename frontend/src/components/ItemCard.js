import React from "react";

function ItemCard({ item, onDelete, onStatusChange }) {
  const statusColors = {
    completed: "#4caf50",
    "in-progress": "#ff9800",
    pending: "#e94560",
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.name}>{item.name}</h3>
        <span style={{ ...styles.status, backgroundColor: statusColors[item.status] || "#888" }}>
          {item.status}
        </span>
      </div>
      <div style={styles.actions}>
        <select
          value={item.status}
          onChange={(e) => onStatusChange(item.id, e.target.value)}
          style={styles.select}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={() => onDelete(item.id)} style={styles.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#16213e",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    border: "1px solid #0f3460",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  name: { color: "#ffffff", margin: 0, fontSize: "18px" },
  status: {
    padding: "5px 12px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  actions: { display: "flex", gap: "10px" },
  select: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px solid #0f3460",
    backgroundColor: "#0f3460",
    color: "#fff",
    cursor: "pointer",
    flex: 1,
  },
  deleteBtn: {
    padding: "8px 16px",
    backgroundColor: "#e94560",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ItemCard;