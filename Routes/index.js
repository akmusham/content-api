const express = require('express')
const router = express.Router()


router.post('/auth',require('./auth'))
router.post('/authLogin',require('./auth/loginAuth'))
router.use('/posts',require('./posts'))
router.use('/user',require('./user'))

module.exports = router
