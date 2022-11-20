const verifyMiddleware = (req, res, next) => {
    console.log(req)
    if(req.isAuthenticated()) {
        return next()
    } else {
        return res.status(301).send({
            status: false,
            msg: 'need to authenticate. verify middleware'
        })
    }
} 

export default verifyMiddleware