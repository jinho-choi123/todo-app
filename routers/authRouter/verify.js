const verify = (req, res) => {
    console.log(req.user)
    if(req.isAuthenticated()) {
        return res.send({
            status: true,
            username: req.user.username,
            msg: 'Is authenticated'
        })
    } else {
        return res.status(301).send({
            status: false,
            msg: 'need to authenticate. verify api'
        })
    }
}
export default verify