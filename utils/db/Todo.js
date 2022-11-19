import mongoose from 'mongoose';
const {Schema} = mongoose;

const todoSchema = new Schema({
    content: String,
    date: Date,
    status: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo