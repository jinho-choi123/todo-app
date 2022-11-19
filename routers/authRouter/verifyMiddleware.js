const verifyMiddleware = (req, res, next) => {
    if(req.isAuthenticated()) {
        next()
    } else {
        res.status(301).send({
            status: false,
            msg: 'need to authenticate'
        })
    }
} 

export default verifyMiddleware