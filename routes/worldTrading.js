const router = require('express').Router()
const stockController = require('../controllers/worldTrading')

router.get('/current', stockController.getCurrentStock)
router.get('/history', stockController.getByDate)
router.get('/intraday', stockController.getFromTo)

module.exports = router