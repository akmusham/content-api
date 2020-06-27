const express = require('express')
const router = express.Router()


router.post('/upload',require('./uploadImage'))
router.post('/addpost',require('./addpost'))
router.post('/like',require('./likepost'))
router.post('/comment',require('./addComment'))
router.get('/',require('./getPostById'))
router.get('/CommentsLikes',require('./CommentsLikes'))
router.post('/LikeComment',require('./LikeComment'))
module.exports = router
