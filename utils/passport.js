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
                    console.log("failed loggin in")
                    return done(null, false, {msg: 'Incorrect Username or Password'})
                }
                crypto.pbkdf2(password, usr.salt, parseInt(process.env.HASH_LOOP, 10), parseInt(process.env.CRYPTO_KEYLEN, 10), process.env.HASH_METHOD, (err, key) => {
                    if(err) {
                        console.log("failed loggin in")
                        return done(err)
                    }
                    if(!crypto.timingSafeEqual(Buffer.from(usr.password, 'base64'), Buffer.from(key, 'base64'))) {
                        console.log("failed loggin in")
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
    console.log(usr)
    User.findOne({_id: usr.id})
        .then((doc) => {
            console.log(doc)
            cb(null, doc)
        })
        .catch((err) => {
            cb(err, false)
        })
})

export default passport