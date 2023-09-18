import { Router } from 'express';
import AuthController from '../pages/auth/controller/auth.controller';

// Create an Express router
const authRouter = Router();
const authCtrl = new AuthController();

authRouter.route('/login').get(AuthController.login);
authRouter.route('/logout').get(AuthController.logout);
authRouter.route('/register').post(AuthController.register);
authRouter.route('/refresh-token').get(AuthController.refreshToken);
authRouter.route('/forgot-password').post(AuthController.forgotPassword);

export default authRouter;