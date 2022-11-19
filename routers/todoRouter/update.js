import Todo from '../../utils/db/Todo.js'

const update = (req, res) => {
    const todoId = req.query.todoid
    const newTodo = req.body
    Todo.updateOne({_id: todoId}, newTodo)
        .then(() => {
            res.send("update todo API")
        })
        .catch((err) => {
            console.log(err)
        })
}

export default update