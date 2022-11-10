import mongoose from 'mongoose';
const {Schema} = mongoose;

const todoSchema = new Schema({
    title: String,
    date: Date,
    status: Boolean,
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo