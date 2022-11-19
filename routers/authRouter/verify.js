const verify = (req, res) => {
    console.log("got verify req")
    console.log(req.user)

    if(req.isAuthenticated()) {
        console.log("already authenticated")
        return res.send({
            status: true,
            msg: 'Is authenticated'
        })
    } else {
        console.log("need to redirect to login page")
        return res.send({
            status: false,
            msg: 'need to authenticate'
        })
    }
}
export default verify