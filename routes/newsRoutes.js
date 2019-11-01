const router = require('express').Router()
const newsController = require('../controllers/newsController')

router.get('/top-headlines', newsController.getTopHeadlines)
router.get('/search/:query', newsController.search)

module.exports = router


