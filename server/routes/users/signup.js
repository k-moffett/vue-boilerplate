const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signup', async (req, res) => {
        let signup = await userController.validateSignupForm('signup', req.body.data)
        if (signup.error) {
            res.send(signup)
        }
        if (signup.success) {
            res.cookie('sessid', signup.success.sessid).send(signup)
        }
    });

}
