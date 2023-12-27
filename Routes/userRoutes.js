const express = require('express')
const router = express.Router()
const { createUser , getUser } = require('../Controllers/userController')

router.post('/signUp' , createUser)
router.post('/login' , getUser)

module.exports = router