import Todo from '../../utils/db/Todo.js'

const remove = (req, res) => {
    const todoId = req.query.todoid
    console.log(todoId)
    //delete from database
    Todo.deleteOne({todoId: todoId})
        .then((doc) => {
            res.send("todo delete API")
        })
        .catch((err) => {
            console.log(err)
        })
}

export default remove