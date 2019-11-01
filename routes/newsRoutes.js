const router = require('express').Router()
const newsController = require('../controllers/newsController')
const isLogin = require('../middlewares/isLogin')

router.use(isLogin)
router.post('/', newsController.create)
router.delete('/:id', newsController.delete)

module.exports = router