import passport from '../../utils/passport.js'

const login = passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureMessage: true,
    })


export default login