class AuthService {
    constructor() {}

    static async Login() {
        const token = { login: true }
        return token
    }

    static async Register() {
        const user = { register: true }
        return user
    }

    static async Logout() {
        return { logout: true }
    }

    static async RefreshToken() {
        const refreshToken = { login: true }
        return refreshToken
    }
}

module.exports = AuthService
