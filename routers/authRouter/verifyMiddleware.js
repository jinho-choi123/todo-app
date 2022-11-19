const verifyMiddleware = (req, res, next) => {
    // console.log("got authorized req")
    // console.log(req.user)
    // if(req.isAuthenticated()) {
    //     console.log("move to next!")
    //     next()
    // } else {
    //     res.status(301).send({
    //         status: false,
    //         msg: 'need to authenticate'
    //     })
    // }
    next()
} 

export default verifyMiddleware