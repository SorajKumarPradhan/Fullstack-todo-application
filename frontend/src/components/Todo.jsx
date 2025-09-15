const Todo = ({ title, description, completed, id }) => {
  console.log(title);
  console.log(description);
  console.log(id);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        onClick={async () => {
          await fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
              id,
            }),
            headers: {
              "content-type": "application/json",
            },
          });
        }}
      >
        {completed ? "completed" : "marked as completed"}
      </button>
    </div>
  );
};

export default Todo;
