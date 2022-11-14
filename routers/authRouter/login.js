import passport from '../../utils/passport.js'

const login = (req, res) => {
    console.log('got login request')
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureMessage: true,
    })

    res.send("hello world!")

}

export default login