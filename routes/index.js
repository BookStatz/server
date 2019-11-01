const router = require('express').Router()
const userRoutes = require('./userRoutes')
const newsRoutes = require('./newsRoutes')

router.use('/', userRoutes)
router.use('/fav', newsRoutes)

module.exports = router