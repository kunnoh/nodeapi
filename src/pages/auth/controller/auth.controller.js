// auth.controller.js
import { login, register, refreshToken, forgotPassword } from '../services/auth.service';

class AuthController {
    constructor() {}

    static async login(req, res) {
        try {
            const result = await login();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during login.' });
        }
    }

    static async register(req, res) {
        try {
            const result = await register();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during registration.' });
        }
    }
    
    static async refreshToken(req, res) {
        try {
            const result = await refreshToken();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during token refresh.' });
        }
    }

    static async forgotPassword(req, res) {
        try {
            const result = await forgotPassword();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred during password reset.' });
        }
    }
}

export default AuthController;
