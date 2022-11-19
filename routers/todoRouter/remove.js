import Todo from '../../utils/db/Todo.js'
import User from '../../utils/db/User.js'

const remove = (req, res) => {
    const todoId = req.query.todoid
    const userId = req.user.id
    //delete from database
    User.deleteOne({_id: userId}, {
            $pull: {todoList: todoId},
        })
        .then((doc) => {
            return Todo.deleteOne({_id: todoId})
        })
        .then((doc) => {
            return res.send(todoId)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default remove