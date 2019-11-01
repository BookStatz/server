const router = require('express').Router()
const userRoutes = require('./userRoutes')
const newsRoutes = require('./newsRoutes')
const eventRoutes = require('./eventBrite')

router.use('/', userRoutes)
router.use('/fav', newsRoutes)
router.use('/eventbrite', eventRoutes)

module.exports = router