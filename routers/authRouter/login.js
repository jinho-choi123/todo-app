import passport from './passport'

const login = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureMessage: true,
    })
}

export default login