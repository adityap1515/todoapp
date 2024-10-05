const mongoose = require('mongoose');
const { string } = require('zod');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:000@cluster-1.8vng6.mongodb.net/todo?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema, 'todo1');

module.exports = {
    todo
}