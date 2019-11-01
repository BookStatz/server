const router = require('express').Router()
const userRoutes = require('./userRoutes')
const stockRoutes = require('./worldTrading')

router.use('/', userRoutes)

router.use('/stock', stockRoutes)

module.exports = router