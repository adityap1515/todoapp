const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} = require("./types")
const cors = require('cors')
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

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
    try{
    const todos = await todo.find({});

    res.json({
        todos
    });
}catch (error) {
    console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Error fetching todos" });
}
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});