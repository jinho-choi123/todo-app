import { Router } from "express";
import create from "./create.js";
import login from "./login.js";

const authRouter = Router();

authRouter.post('/create', create)
authRouter.post('/login', login)

export default authRouter