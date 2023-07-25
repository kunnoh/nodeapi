const router = require('express').Router();
const Authctrl = require('../controller/auth.controller.js');

router.route('login').get(Authctrl.login)

module.exports = router;