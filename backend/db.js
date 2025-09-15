const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:KMpu4nyWjRle1Gg1@cluster0.jjczvjh.mongodb.net/Todo-application"
);

const addtodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", addtodoSchema);

module.exports = {
  Todos,
};
