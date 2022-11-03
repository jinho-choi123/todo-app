const update = (req, res) => {
    const todoId = req.query.todoid
    const newTodo = req.body.todo
    //update database 
    console.log(todoId)
    console.log(newTodo)
    res.send("update todo API")
}

export default update