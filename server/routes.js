const path = require('path');

module.exports = (app) => {

	app.get('/router_test/', (req, res) => {
        res.send('Test Success')
    });

}