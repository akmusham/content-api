const express = require('express')
const router = express.Router()


router.post('/adduser',require('./adduser'))

module.exports = router
