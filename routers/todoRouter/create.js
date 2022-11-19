import Todo from '../../utils/db/Todo.js'
import User from '../../utils/db/User.js'

const create = (req, res) => {
    const todo = req.body
    const userId = req.user.id

    //create from database
    const newTodo = new Todo({
        title: todo.title,
        date: todo.date,
        status: false,
    })
    newTodo.save()
        .then((doc) => {
            const todoId = doc._id;
            User.updateOne({_id: userId}, {$push: {todoList: todoId}})
                .then((usr) => {
                    res.send({title: doc.title, _id: doc._id, date: doc.date, status: doc.status})
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
}

export default create