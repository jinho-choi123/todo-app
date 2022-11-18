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
                console.log(usr)
                if (!usr) {
                    console.log('login failed!!')
                    return done(null, false, {msg: 'Incorrect Username or Password'})
                }
                crypto.pbkdf2(password, usr.salt, parseInt(process.env.HASH_LOOP, 10), parseInt(process.env.CRYPTO_KEYLEN, 10), process.env.HASH_METHOD, (err, key) => {
                    if(err) {
                        console.log('login failed!!')
                        return done(err)
                    }
                    if(!crypto.timingSafeEqual(Buffer.from(usr.password, 'base64'), Buffer.from(key, 'base64'))) {
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
    User.findById({_id: usr.id})
        .then((doc) => {
            cb(null, doc)
        })
        .catch((err) => {
            cb(err, false)
        })
})

export default passport