import { Router } from "express";
import create from "./create.js";

const authRouter = Router();

authRouter.post('/create', create)

export default authRouter