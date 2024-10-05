const zod = require("zod");
const mongoose = require("mongoose");

const createTodo = zod.object({
    title: zod.string(),
})

const updateTodo = zod.object({
    id: zod.string(),
})



const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false }, 
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
    todo,
} 