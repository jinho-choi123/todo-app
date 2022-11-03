const remove = (req, res) => {
    const todoId = req.query.todoid
    console.log(todoId)
    //delete from database
    res.send("todo delete API")
}

export default remove