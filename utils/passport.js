import passport from "passport";
import { Strategy } from "passport-local";
import User from './db/User.js';
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
                    console.log('login failed!!')
                    return done(null, false, {msg: 'Incorrect Username or Password'})
                }
                crypto.pbkdf2(password, usr.salt, process.env.HASH_LOOP, process.env.CRPYTO_KEYLEN, process.env.HASH_METHOD, (err, key) => {
                    if(err) {
                        console.log('login failed!!')
                        return done(err)
                    }
                    if(!crypto.timingSafeEqual(usr.password, key)) {
                        console.log('login failed!!')
                        return done(null, false, {msg: 'Incorrect Username or Password'})
                    }
                    console.log("login success!!")
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