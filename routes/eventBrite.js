const router = require('express').Router()
const eventBriteController = require('../controllers/eventBriteController')

router.get('/categories', eventBriteController.findByCategories )
router.get('/date', eventBriteController.findByDate )
router.get('/name', eventBriteController.findByName )
router.get('/location', eventBriteController.findByLocation )

module.exports = router