const router = require('express').Router()
const { login, register } = require('../controller/auth.controller.js')

router.route('/login').get(login)
router.route('/register').post(register)

module.exports = router
