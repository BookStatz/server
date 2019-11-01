const router = require('express').Router()
const bookmarkController = require('../controllers/bookmarkController')

router.get('/news', bookmarkController.displayNews)
router.get('/event', bookmarkController.displayEvent)
router.post('/news', bookmarkController.addNews)
router.post('/event', bookmarkController.addEvent)
router.delete('/news/:id', bookmarkController.removeNews)
router.delete('/event/:id', bookmarkController.removeEvent)

module.exports = router