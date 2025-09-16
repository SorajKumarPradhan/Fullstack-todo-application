const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MY_DB_URL);
console.log(process.env.MY_DB_URL);

const addtodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", addtodoSchema);

module.exports = {
  Todos,
};
