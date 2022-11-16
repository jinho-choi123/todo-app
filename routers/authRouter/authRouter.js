import { Router } from "express";
import create from "./create.js";
import login from "./login.js";
import verify from "./verify.js";
import loginSuccess from './loginSuccess.js';

const authRouter = Router();

authRouter.post('/create', create)
authRouter.post('/login', login, loginSuccess)
authRouter.get('/verify', verify)

export default authRouter