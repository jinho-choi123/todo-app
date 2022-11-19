import { Router } from "express";
import signUp from "./SignUp.js";
import login from "./login.js";
import loginSuccess from './loginSuccess.js';
import verify from "./verify.js";

const authRouter = Router();

authRouter.get('/verify', verify)
authRouter.post('/signup', signUp)
authRouter.post('/login', login, loginSuccess)

export default authRouter