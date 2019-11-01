const News = require('../models/news')

class newsController {
    static create(req, res, next) {
        const createdData = {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img,
            user: req.LoggedUser.id
        }

        News.create(createdData)
            .then(news => {
                res.status(201).json({
                    news, msg: 'News has been successfully added to bookmarks'
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const id = req.params.id

        News.findByIdAndDelete(id)
            .then(news => {
                res.status(200).json({
                    news, msg: 'News has been successfully removed to bookmarks'
                })
            })
            .catch(next)
    }

}

module.exports = newsController