import Todo from '../../utils/db/Todo.js'

const show = (req, res) => {
    //req.user 
    //const userId = 1234 
    //get all todos from db and send res
    Todo.find({})
        .then((docs) => {
            res.send(docs)
        })
        .catch((err) => {
            console.log(err)
        })
}

export default show