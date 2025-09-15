import { use, useEffect, useState } from "react";
import CreateTodo from "./components/createTodo";
import Todo from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();

        setTodos(data.todos); // ✅ Set the todos
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }

    fetchTodos(); // ✅ Called inside useEffect
  }, []);

  return (
    <>
      <h1 style={{ fontSize: "4rem", padding: "1rem" }}>Simple Todo app</h1>
      <CreateTodo
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      {todos.length &&
        todos.map((todo) => (
          <Todo
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            key={todo._id}
            id={todo._id}
          ></Todo>
        ))}
    </>
  );
}

export default App;
