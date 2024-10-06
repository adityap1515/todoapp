const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:000@cluster-1.8vng6.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}