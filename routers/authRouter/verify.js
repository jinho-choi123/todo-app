
const verify = (req, res) => {
    res.json(req.user)
}

export default verify