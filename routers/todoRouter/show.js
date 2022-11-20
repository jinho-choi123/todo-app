import Todo from '../../utils/db/Todo.js'
import User from '../../utils/db/User.js'

const show = (req, res) => {
    console.log("got show request")

    User.findOne({_id: req.user._id})
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