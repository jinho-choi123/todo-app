import User from '../../utils/db/User.js'
import passwordValidator from '../../utils/passwordValidator.js'

const create = async (req, res) => {
    const username = req.body.username 
    const password1 = req.body.password1 
    const password2 = req.body.password2 

    const valid = await passwordValidator(password1, password2)
    res.send(valid)
    // if(status == false) {
    //     res.send({
    //         status: false,
    //         msg: msg
    //     })
    // } else {
    //     const newUser = new User({
    //         username: username,
    //         password: msg.hash,
    //         salt: msg.salt,
    //     })

    //     newUser.save()
    //         .then((doc) => {
    //             res.send({username: doc.username, _id: doc._id})
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }
}

export default create