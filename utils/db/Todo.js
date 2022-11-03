import mongoose from 'mongoose';
const {Schema} = mongoose;

const todoSchema = new Schema({
    title: String,
    date: Date,
    status: Boolean,
})

todoSchema.virtual('todoId').get(function() {
    return this._id;
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo