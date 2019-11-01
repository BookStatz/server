const Event = require('../models/event')
const News = require('../models/news')

class bookmarkController {
    static displayEvent(req, res, next) {
        const user = {
            user: req.LoggedUser.id
        }
        Event.find(user) 
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }

    static displayNews(req, res, next) {
        const user = {
            user: req.LoggedUser.id
        }
        News.find(user) 
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }

    static addEvent(req, res, next) {
        const createdData = {
            title: req.body.title,
            description: req.body.description,
            user: req.LoggedUser.id
        }

        Event.create(createdData)
            .then(result => {
                res.status(201).json({
                    result, msg: 'Event is successfully added to bookmarks'
                })
            })
            .catch(next)
    }

    static addNews(req, res, next) {
        const createdData = {
            title: req.body.title,
            description: req.body.description,
            user: req.LoggedUser.id
        }

        News.create(createdData)
            .then(result => {
                res.status(201).json({
                    result, msg: 'News is successfully added to bookmarks'
                })
            })
            .catch(next)
    }

    static removeEvent(req, res, next) {
        const id = req.params.id

        Event.findByIdAndDelete(id)
            .then(result => {
                res.status(200).json({
                    result, msg: 'Event is successfully removed from bookmarks'
                })
            })
    }

    static removeNews(req, res, next) {
        const id = req.params.id

        News.findByIdAndDelete(id)
            .then(result => {
                res.status(200).json({
                    result, msg: 'News is successfully removed from bookmarks'
                })
            })
    }
}

module.exports = bookmarkController