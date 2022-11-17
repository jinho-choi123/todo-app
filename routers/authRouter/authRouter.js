import { Router } from "express";
import signUp from "./SignUp.js";
import login from "./login.js";
import verify from "./verify.js";
import loginSuccess from './loginSuccess.js';

const authRouter = Router();

authRouter.post('/signup', signUp)
authRouter.post('/login', login, loginSuccess)
authRouter.get('/verify', verify)

export default authRouter