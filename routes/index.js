const router = require('express').Router()
const userRoutes = require('./userRoutes')
const stockRoutes = require('./worldTrading')
const newsRoutes = require('./newsRoutes')
const eventRoutes = require('./eventBrite')
const bookmarkRoutes = require('./bookmarkRoutes')

router.use('/', userRoutes)
router.use('/news', newsRoutes)
router.use('/events', eventRoutes)
router.use('/stock', stockRoutes)
router.use('/bookmarks', bookmarkRoutes)

module.exports = router