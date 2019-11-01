const User = require('../models/user')
const generateToken = require('../helpers/generateToken')
const verifyPassword = require('../helpers/verifyPassword')
const {OAuth2Client} = require('google-auth-library');

class userController {
    static addToFavorites (req, res, next) {
        const id = req.LoggedUser.id

        User.findByIdAndUpdate(id, {
            $push: {
                favorites: req.body.favorites
            }
        })
            .then(user => {
                res.status(200).json({
                    msg: 'Successfully added to favorites'
                })
            })
            .catch(next)
    }

    static removeFromFavorites (req, res, next) {
        const id = req.LoggedUser.id

        User.findByIdAndUpdate(id, {
            $pull: {
                favorites: req.body.favorites
            }
        })
            .then(user => {
                res.status(200).json({
                    msg: 'Successfully added to favorites'
                })
            })
            .catch(next)
    }
    
    static register(req, res, next) {
        const createdData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(createdData)
            .then(user => {
                const data = {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }

                const token = generateToken(data)
                res.status(201).json({
                    data, token, msg: 'Successfully registered'
                })
            })
            .catch(next)
    }

    static login(req, res, next) {
        const email = {
            email: req.body.email
        }

        console.log(req.body)

        User.findOne(email)
            .then(user => {
                const passwordIsTrue = verifyPassword(req.body.password, user.password)
                
                if (passwordIsTrue) {
                    const data = {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    const token = generateToken(data)

                    res.status(200).json({token, data})
                } else {
                    throw {
                        status: 401,
                        message: 'Wrong email/password'
                    }
                }
            })
            .catch(next)
    }

    static googleLogin(req, res, next) {
        const client = new OAuth2Client(process.env.GOOGLECLIENTID);
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLECLIENTID
        })
            .then(ticket => {
                const payload = ticket.getPayload();
                const token = generateToken(payload)
                res.status(200).json(token)
            })
            .catch(next)

    }
}

module.exports = userController