import passport from '../../utils/passport.js'

const login = passport.authenticate('local', {
        failureMessage: true,
})

export default login