import Todo from '../../utils/db/Todo.js'
import User from '../../utils/db/User.js'

const show = (req, res) => {
    console.log("hello world!!!!!!!!!!!!")
    console.log(req.user)
    const userId = req.user.id
    User.findOne({_id: userId})
        .then((doc) => {
            const todoIdList = doc.todoList;
            return Todo.find({
                _id: {$in: todoIdList}
            })
        })
        .then((docs) => {
            res.send(docs)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default show