import User from '../../utils/db/User.js'
import {passwordValidator, hasher, usernameValidator} from '../../utils/authValidator.js'

const create = async (req, res) => {
    const username = req.body.username 
    const password1 = req.body.password1 
    const password2 = req.body.password2 

    usernameValidator({username: username, password1: password1, password2: password2})
        .then(passwordValidator)
        .then(hasher)
        .then(({hash, salt}) => {
            const newUser = new User({
                username: username, 
                password: hash,
                salt: salt,
            })

            return newUser.save()
        })
        .then((doc) => {
            res.send({status: true, username: doc.username, _id: doc._id})
        })
        .catch((err) => {
            console.log(err)
            res.send({msg: err, status: false})
        })
}

export default create