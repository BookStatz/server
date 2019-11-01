const router = require('express').Router()
const userRoutes = require('./userRoutes')
const newsRoutes = require('./newsRoutes')
const eventRoutes = require('./eventBrite')

router.use('/', userRoutes)
router.use('/eventbrite', eventRoutes)
router.use('/fav', newsRoutes)

module.exports = router