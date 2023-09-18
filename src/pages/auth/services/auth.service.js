class AuthService {
    constructor() {}

    static async Login() {
        const token = { login: true }
        return token
    }

    static async Register() {
        const user = {
            status: success,
            user: 'email'
        };
        return user;
    }

    static async Logout() {
        return {
            status: 'success',
            message: 'logout out'
        };
    }

    static async RefreshToken() {
        return {
            status: 'success',
            refreshToken: 'hguyuyrsdrftyguhijohigufydtsrghcvjhkh'
        };
    }

    static async ForgotPassword(){
        return { link: 'reset link'}
    }
}

export default AuthService;
