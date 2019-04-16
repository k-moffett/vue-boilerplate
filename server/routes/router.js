module.exports = (app) => {

    //user routes
    require('./users/signup')(app)
    require('./users/signin')(app)
    require('./users/sessionRedirect')(app)

}
