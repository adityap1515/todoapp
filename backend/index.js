const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {createTodo} = require("./types")
const app = express();
const port = 3001;

app.listen(port, )

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    } 

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },
{
    completed: true
})
    res.json({
        msg: "todo completed"
    })
})