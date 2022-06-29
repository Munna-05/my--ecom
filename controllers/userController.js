module.exports = {

    login: (req, res) => {
        res.render('users/login')
    },
    postLogin: (req, res) => {
        res.send(req.body)
    }


}