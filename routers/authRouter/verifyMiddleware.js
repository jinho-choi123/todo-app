const verifyMiddleware = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next()
    } else {
        return res.send({
            status: false,
            msg: 'need to authenticate. verify middleware'
        })
    }
} 

export default verifyMiddleware