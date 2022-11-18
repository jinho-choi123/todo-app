import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    salt: String,
    todoList: [Schema.Types.ObjectId],
})

const User = mongoose.model('User', userSchema)

export default User