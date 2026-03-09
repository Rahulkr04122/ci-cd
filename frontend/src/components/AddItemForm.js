import React, { useState } from "react";

function AddItemForm({ onAdd }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    await onAdd({ name, status });
    setName("");
    setStatus("pending");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Add New Task</h2>
      <div style={styles.row}>
        <input
          type="text"
          placeholder="Task name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Adding..." : "Add Task"}
        </button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "#16213e",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "30px",
    border: "1px solid #0f3460",
  },
  title: { color: "#e94560", marginTop: 0, marginBottom: "15px" },
  row: { display: "flex", gap: "10px", flexWrap: "wrap" },
  input: {
    flex: 2,
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #0f3460",
    backgroundColor: "#0f3460",
    color: "#fff",
    fontSize: "15px",
    minWidth: "200px",
  },
  select: {
    flex: 1,
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #0f3460",
    backgroundColor: "#0f3460",
    color: "#fff",
    fontSize: "15px",
    minWidth: "140px",
  },
  button: {
    padding: "10px 25px",
    backgroundColor: "#e94560",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
};

export default AddItemForm;