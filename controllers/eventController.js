const Event = require('../models/event')

class eventController {
    static create(req, res, next) {
        const createdData = {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img,
            user: req.LoggedUser.id
        }

        Event.create(createdData)
            .then(event => {
                res.status(201).json({
                    event, msg: 'Event has been successfully added to bookmarks'
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const id = req.params.id

        Event.findByIdAndDelete(id)
            .then(event => {
                res.status(200).json({
                    event, msg: 'Event has been successfully removed to bookmarks'
                })
            })
            .catch(next)
    }

}

module.exports = eventController