
const loginSuccess = (req, res) => {
    console.log(req.user)
    res.json(req.user)
}

export default loginSuccess