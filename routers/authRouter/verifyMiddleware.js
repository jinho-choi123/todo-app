import passport from '../../utils/passport.js'

const verifyMiddleware = async (req, res, next) => {
    try {
        const payload = await passport.authenticate('local',
    {
        session: true,
        failureMessage: true,
    })
    console.log(req.user)
    next()
    } catch (err) {
        console.log(err)
    }
} 

export default verifyMiddleware