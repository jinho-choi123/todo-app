const create = (req, res) => {
    const todo = req.body.todo
    console.log(todo)

    //create from database
    res.send("todo create API")
}

export default create