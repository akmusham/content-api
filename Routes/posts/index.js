const express = require('express')
const router = express.Router()


router.post('/upload',require('./uploadImage'))

module.exports = router
