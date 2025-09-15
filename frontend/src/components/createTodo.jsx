import { useState } from "react";

const CreateTodo = ({ title, setTitle, description, setDescription }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="title..."
        style={{
          padding: "0.5rem 10px",
          margin: "1rem",
          borderRadius: "5px",
          width: "20%",
          fontSize: "1rem",
          outline: "none",
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description..."
        style={{
          padding: "0.5rem 10px",
          margin: "0.5rem 1rem",
          borderRadius: "5px",
          width: "20%",
          fontSize: "1rem",
          outline: "none",
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: "0.5rem 10px",
          margin: "0.5rem 1rem",
          borderRadius: "5px",
          width: "21.5%",
          fontSize: "1rem",
          background: "#1877F2",
          color: "white",
          cursor: "pointer",
        }}
        onClick={async () => {
          await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
            }),
            headers: {
              "content-type": "application/json",
            },
          });
        }}
      >
        add Todo
      </button>
    </div>
  );
};
export default CreateTodo;
