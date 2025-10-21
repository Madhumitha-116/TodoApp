import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    if (todoText.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 To-Do App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
