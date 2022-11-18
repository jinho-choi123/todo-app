import passport from '../../utils/passport.js'

const verifyMiddleware = async (req, res, next) => {
    if(req.isAuthenticated()) {
        next()
    } else {
        res.send({
            status: false,
            msg: 'please login first',
            redirect: '/login'
        })
    }
} 

export default verifyMiddleware