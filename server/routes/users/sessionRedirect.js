const userController = require('../../db/controllers/userController')

module.exports = (app) => {

    app.post('/sess_redir', async (req, res) => {
        let userSessionCheck = await userController.sessionRedirect(req.body.data.method, req.body.data.sessid)
        
        if(userSessionCheck.error) {
            res.send(userSessionCheck)
        }
        if (userSessionCheck.success) {
            res.send(userSessionCheck)
        }
    });

}