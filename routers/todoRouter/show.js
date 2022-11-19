import Todo from '../../utils/db/Todo.js'
import User from '../../utils/db/User.js'

const show = (req, res) => {
    console.log("this is starting point of show router")
    console.log(`is user Authenticated? ${req.isAuthenticated()}`)

    User.findOne({_id: req.user._id})
        .then((doc) => {
            console.log(`the user info stored in db is following`)
            console.log(doc)
            const todoIdList = doc.todoList;
            return Todo.find({
                _id: {$in: todoIdList}
            })
        })
        .then((docs) => {
            console.log("the todos that user have is following")
            console.log(docs)
            res.send(docs)
        })
        .catch((err) => {
            console.log("got an error while show route")
            console.log(err)
        })
}

export default show