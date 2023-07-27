const { Login, Register } = require('../services/auth.service')

class AuthController {
    constructor() {}

    static async login(req, res) {
        const p = await Login()
        res.status(200).json(p)
    }

    static async register(req, res) {
        const p = Register();
        res.status(200).json(p)
    }    
}

module.exports = AuthController
