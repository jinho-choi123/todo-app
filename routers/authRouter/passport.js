import { urlencoded } from "body-parser";
import passport from "passport";
import { Strategy } from "passport-local";
import User from '../../utils/db/User';
import crypto from 'crypto'

const LocalStrategy = Strategy;

passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
},
    (username, password, done) => {
        User.findOne({username: username})
            .then((usr) => {
                if (!usr) {
                    return done(null, false, {msg: 'Incorrect Username or Password'})
                }

                crypto.pbkdf2(password, usr.salt, process.env.HASH_LOOP, process.env.CRPYTO_KEYLEN, process.env.HASH_METHOD, (err, key) => {
                    if(err) {return done(err)}
                    if(!crypto.timingSafeEqual(usr.password, key)) {
                        return done(null, false, {msg: 'Incorrect Username or Password'})
                    }
                    return done(null, usr)
                })
                    
            })
            .catch((err) => {
                console.log(err)
            })
    }
))

passport.serializeUser((usr, cb) => {
    process.nextTick(() => {
        cb(null, {id: usr._id, username: usr.username})
    })
})

passport.deserializeUser((usr, cb) => {
    process.nextTick(() => {
        return cb(null, usr)
    })
})

export default passport