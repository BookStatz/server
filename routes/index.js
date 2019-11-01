const router = require('express').Router()
const userRoutes = require('./userRoutes')
const eventRoutes = require('./eventBrite')

router.use('/', userRoutes)
router.use('/eventbrite', eventRoutes)

module.exports = router