
const express = require('express');
const app = express();

app.use(express.json());

app.listen(3001, function () {
    console.log("back is running, ")
})


app.post("/todo", function(req, res) {
   
    res.status(200).send("POST /todo request received.");
});

app.get("/todos", function(req, res) {
   
    res.status(200).json({ todos: [] });  
});

app.put("/completed", function(req, res) {
    res.status(200).send("PUT /completed request received.");
});