const express = require("express");
const { todoSchema, idSchema } = require("./types");
const { Todos } = require("./db");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPlayload = req.body;
  console.log(createPlayload);
  const parsedPlayload = todoSchema.safeParse(createPlayload);

  if (!parsedPlayload.success) {
    res.status(400).json({
      msg: "invalid inputs",
    });
  } else {
    await Todos.create({
      title: createPlayload.title,
      description: createPlayload.description,
      completed: false,
    });
    res.json({
      msg: "todo created successfully",
    });
  }
});
app.get("/todos", async (req, res) => {
  const todos = await Todos.find({});
  res.json({
    todos: todos,
  });
});
app.put("/completed", async (req, res) => {
  const idPlaylod = req.body;
  console.log(idPlaylod);
  const parsedPlayload = idSchema.safeParse(idPlaylod);
  if (!parsedPlayload.success) {
    res.status(411).json({
      msg: "you set a wrong input",
    });
  } else {
    await Todos.updateOne(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
    res.json({
      msg: "todo marked as completed",
    });
  }
});
app.listen(PORT, () => [console.log("server start on port 3000")]);
