require('dotenv').config()
const uuidv4 = require('uuid/v4')
const models = require('../models')
const userModel = models.models.Users
const encrypt = require('../../tools/encrypt')
const decrypt = require('../../tools/decrypt')

const userController = {

    async validateSignupForm(method, data) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const length = /^(?=.{6,16}$).*/
        const lower = /^(?=.*[[a-z]).*/
        const upper = /^(?=.*[[A-Z]).*/
        const number = /^(?=.*[[0-9]).*/
        const special = /^(?=.*[[!@#$%^&*-]).*/

        //email validation
        if (emailRegex.test(data.email.toString()) === false) {
            return {error: 'invalid email'}
        } 

        //username length validation
        if (data.username.length < 4) {
            return {error: 'password less than 4 characters'}
        } else if (data.username.length > 16) {
            return {error: 'password greater than 16 characters'}
        }

        //password format validation
        if (length.test(data.password.toString()) === false || lower.test(data.password.toString()) === false || upper.test(data.password.toString()) === false || number.test(data.password.toString()) === false || special.test(data.password.toString()=== false)) {
            return {error: 'incorrect password format'}
        }

        return await this.validateEmail(method, data)
    },

    async validateEmail(method, data) {
        let lookupEmail = 
            await userModel.findOne({where: {email: data.email}})
            .catch((error) => {console.log('EMAIL LOOKUP ERROR: \n', error)})

        switch(method) {
            case 'signup':
                if (lookupEmail === null) {
                    return this.validateUsername(method, data)
                } else {
                    return {error: 'email in use'}
                }
                break
            case 'signin':
                if (lookupEmail === null) {
                    return {error: 'email not found'}
                } else {
                    return await this.valiatePassword(data)
                }
                break
            default:
                return {error: 'validate email method not recognized'}
        }

    },

    async validateUsername(method, data) {
        let lookupUsername = 
            await userModel.findOne({where: {username: data.username}})
            .catch((error) => {console.log('USERNAME LOOKUP ERROR: \n', error)})

        switch(method) {
            case 'signup':
                if (lookupUsername === null) {
                    return this.signup(data)
                } else {
                    return {error: 'username in use'}
                }
                break
            default:
                return {error: 'validate username method not recognized'}
        }
    },

     async signup(data) {
        let password = await encrypt(data.password)
        let sessid = uuidv4()
        let createUser = 
            await userModel.create({email: data.email, username: data.username, password: password, sessid: sessid})
            .catch((error) => {console.log('CREATE USER ERROR: \n', error)})

            return {success: {
                        message: 'user created',
                        sessid: sessid
                    }}
    },

    async valiatePassword(data) {
        let passwordLookup = 
            await userModel.findOne({where: {email: data.email}, attributes: ['password']})
            .catch((error) => {'VALIDATE PASSWORD ERROR: \n', error})

        let storedPassword = passwordLookup.dataValues.password
        let isValid = await decrypt(data.password, storedPassword)

        if (isValid === false) {
            return {error: 'invalid password'}
        } else if (isValid === true) {
            return await this.signin(data)
        }
    },

    async signin(data) {
        let sessid = uuidv4()
        let updateSessid = 
            await userModel.update({sessid: sessid}, {where: {email: data.email}})
            .catch((error) => {console.log('SIGNIN USER ERROR: \n', error)})
        return {success: {
            message: 'signin success',
            sessid: sessid
        }}
    },

    async sessionRedirect(method, sessid) {
        console.log(method)
        let isValidSessid = await userModel.findOne({where: {sessid: sessid}})
        
        if (isValidSessid === null) {
            return {error: {message: 'invalid session'}}
        }
        if (method === 'landing') {
            return {success: { message: 'valid session'}}
        }
        if (method === 'home') {
            return {success: {
                message: 'valid session',
                username: isValidSessid.dataValues.username 
            }}
        }
    }

}

module.exports = userController