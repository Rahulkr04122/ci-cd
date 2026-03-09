import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getItems = async () => {
  const response = await api.get("/api/items");
  return response.data;
};

export const createItem = async (item) => {
  const response = await api.post("/api/items", item);
  return response.data;
};

export const updateItem = async (id, item) => {
  const response = await api.put(`/api/items/${id}`, item);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await api.delete(`/api/items/${id}`);
  return response.data;
};

export default api;