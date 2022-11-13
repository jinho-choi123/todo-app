import crypto from 'crypto'

const passwordValidator = async (password1, password2) => {
    if(password1 != password2) {
        return {
            status: false,
            msg: 'password doesnt match!'
        }
    } else if(password1.length < 10) {
        return {
            status: false,
            msg: 'password is too short. At least 10 characters'
        }
    } else if(password1.length > 30) {
        return {
            status: false,
            msg: 'password is too long, Max 30 characters'
        }
    } else {
        const randomSalt = await crypto.randomBytes(50)
        crypto.pbkdf2(password1, randomSalt, parseInt(process.env.HASH_LOOP, 10), parseInt(process.env.CRYPTO_KEYLEN, 10), process.env.HASH_METHOD, (err, key) => {
            if(err) {
                console.log(err)
            }
            return {
                status: true,
                msg: {
                    hash: key, 
                    salt: randomSalt
                }
            }
        })

    }
}

export default passwordValidator