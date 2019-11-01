const router = require('express').Router()
const userRoutes = require('./userRoutes')
const newsRoutes = require('./newsRoutes')

router.use('/', userRoutes)
router.use('/news', newsRoutes)

module.exports = router