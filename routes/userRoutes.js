const router = require('express').Router()
const userController = require('../controllers/userController')
const isLogin = require('../middlewares/isLogin')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/gsignin', userController.googleLogin)
// router.patch('/fav', isLogin, userController.addToFavorites)
// router.patch('/unfav', isLogin, userController.removeFromFavorites)

module.exports = router