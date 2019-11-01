const router = require('express').Router()
const userRoutes = require('./userRoutes')
const stockRoutes = require('./worldTrading')

const newsRoutes = require('./newsRoutes')
const eventRoutes = require('./eventBrite')

router.use('/', userRoutes)
router.use('/fav', newsRoutes)
router.use('/news', newsRoutes)
router.use('/eventbrite', eventRoutes)

router.use('/stock', stockRoutes)

module.exports = router