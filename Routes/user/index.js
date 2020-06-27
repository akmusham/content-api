const express = require('express')
const router = express.Router()

router.post('/getUser',require('./getUserbyId'))
router.post('/adduser',require('./adduser'))

module.exports = router
