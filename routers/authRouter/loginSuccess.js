
const loginSuccess = (req, res) => {
    const userId = req.user._id 
    const username = req.user.username 
    res.send({
        userId: userId,
        username: username,
        status: true,
    })
}

export default loginSuccess