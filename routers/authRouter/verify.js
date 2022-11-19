const verify = (req, res) => {
    if(req.isAuthenticated()) {
        return res.send({
            status: true,
            msg: 'Is authenticated'
        })
    } else {
        return res.send({
            status: false,
            msg: 'need to authenticate'
        })
    }
}
export default verify