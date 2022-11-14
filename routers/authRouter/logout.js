
const logout = (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err)
        } else {
            res.redirect('/')
        }
    })
}

export default logout