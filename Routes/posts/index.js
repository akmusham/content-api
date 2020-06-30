const express = require('express')
const router = express.Router()


// router.post('/upload',require('./uploadImage'))
router.post('/addpost',require('./addpost'))
router.post('/like',require('./likepost'))
router.post('/comment',require('./addComment'))
router.get('/',require('./getPostById'))
router.get('/getPublic',require('./getPublicPosts'))
router.get('/getFollowingPosts',require('./getUserFollowingPosts'))
router.get('/get/:userid',require('./getUserPosts'))
router.post('/LikeComment',require('./LikeComment'))
router.get('/getlikes/:id',require('./getPostLikes'))
router.post('/EditComment',require('./EditComment'))

module.exports = router
