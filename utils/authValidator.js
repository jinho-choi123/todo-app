import crypto from 'crypto'
import User from './db/User.js'

const usernameValidator = ({username, password1, password2}) => {
    return new Promise((resolve, reject) => {
        User.exists({username: username})
        .then((doc) => {
            if(doc) {
                reject('duplicate username')
            } else {
                resolve({password1: password1, password2: password2})
            }
        })
        .catch((err) => {
            console.log(err)
        })
    })
}

const passwordValidator = ({password1, password2}) => {
    return new Promise((resolve, reject) => {
        if(password1 != password2) {
            reject("password doesnt match.")
    } else if(password1.length < 7) {
        reject('password is too short. At least 7 characters')
    } else if(password1.length > 30) {
        reject('password is too long, Max 30 characters')
    } else {
        const randomSalt = crypto.randomBytes(50).toString('base64')
        resolve({password: password1, salt: randomSalt})
    }})
}

const hasher = ({password, salt}) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, parseInt(process.env.HASH_LOOP, 10), parseInt(process.env.CRYPTO_KEYLEN, 10), process.env.HASH_METHOD, (err, key) => {
            if(err) {
                reject(err)
            }
            resolve({hash: key.toString('base64'), salt: salt})
        })
    })
}

export {usernameValidator, passwordValidator, hasher}