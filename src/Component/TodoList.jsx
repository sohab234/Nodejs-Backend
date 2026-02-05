

import { useEffect, useState } from "react";
import api from "../api";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/v1/todo");
      setTodos(res.data?.data || []);
    } catch (err) {
      console.log("Fetch error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async (e) => {
    e.preventDefault();
    if (!titel.trim() || !description.trim()) return;
    try {
      await api.post("/api/v1/todo", { titel, description });
      setTitel("");
      setDescription("");
      fetchTodos();
    } catch (err) {
      console.log("Create error:", err.response?.data || err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/api/v1/todo/${id}`);
      fetchTodos();
    } catch (err) {
      console.log("Delete error:", err.response?.data || err.message);
    }
  };

  const toggleComplete = async (todo) => {
    try {
      await api.put(`/api/v1/todo/${todo._id}`, { isCompleted: !todo.isCompleted });
      fetchTodos();
    } catch (err) {
      console.log("Update error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="todo-container">
      <h3>My Todos</h3>

      <form onSubmit={createTodo} className="todo-form">
        <input
          type="text"
          value={titel}
          onChange={(e) => setTitel(e.target.value)}
          placeholder="Todo title..."
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description..."
          required
        />
        <button type="submit">Add Todo</button>
      </form>

      {loading ? (
        <p className="todo-loading">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="todo-empty">No todos yet. Create one!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={!!todo.isCompleted}
                  onChange={() => toggleComplete(todo)}
                  className="todo-checkbox"
                />
                <div className="todo-text">
                  <div className={`todo-title ${todo.isCompleted ? "completed" : ""}`}>
                    {todo.titel}
                  </div>
                  <div className={`todo-description ${todo.isCompleted ? "completed" : ""}`}>
                    {todo.description}
                  </div>
                </div>
              </div>
              <div className="todo-actions">
                <button className="btn-complete" onClick={() => toggleComplete(todo)}>
                  {todo.isCompleted ? "Undo" : "Done"}
                </button>
                <button className="btn-delete" onClick={() => deleteTodo(todo._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}