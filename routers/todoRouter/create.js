import Todo from '../../utils/db/Todo.js'

const create = (req, res) => {
    const todo = req.body
    console.log(todo)

    //create from database
    const newTodo = new Todo({
        title: todo.title,
        date: todo.date,
        status: false,
    })
    newTodo.save()
        .then((doc) => {
            res.send({title: doc.title, _id: doc._id, date: doc.date, status: doc.status})
        })
        .catch((err) => {
            console.log(err)
        })
}

export default create