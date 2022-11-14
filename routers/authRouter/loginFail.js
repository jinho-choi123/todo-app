
const loginFail = (req, res) => {
    res.send({
        status: false,
        msg: 'login failed'
    })
}

export default loginFail