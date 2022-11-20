import { Router } from "express";
import signUp from "./SignUp.js";
import login from "./login.js";
import loginSuccess from './loginSuccess.js';
import verify from "./verify.js";
import logout from "./logout.js";

const authRouter = Router({strict: false});

authRouter.get('/verify', verify)
authRouter.post('/signup', signUp)
authRouter.post('/login', login, loginSuccess)
authRouter.get('/logout', logout)

export default authRouter