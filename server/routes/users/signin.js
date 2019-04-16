const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/signin', async (req, res) => {
        let signin = await userController.validateEmail('signin', req.body.data)
        if (signin.error) {
            res.send(signin)
        }
        if(signin.success) {
            res.cookie('sessid', signin.success.sessid).send(signin.success)
        }

    });

}