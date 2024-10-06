
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());

app.listen(3001, function () {
    console.log("back is running, ")
})


app.post("/todo", function(req, res) {
   
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return;
    }
    //mut in mongo
});

app.get("/todos", function(req, res) {
   
    res.status(200).json({ todos: [] });  
});

app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the worng inputs",
        })
        return;
    }
});