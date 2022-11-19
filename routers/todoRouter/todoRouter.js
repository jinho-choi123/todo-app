import { Router } from "express";
import create from './create.js';
import remove from "./remove.js";
import show from "./show.js";
import update from "./update.js";
import verifyMiddleware from "../authRouter/verifyMiddleware.js";
const todoRouter = Router();

todoRouter.post('/create', verifyMiddleware, create)
todoRouter.delete('/remove',verifyMiddleware, remove)
todoRouter.put('/update',verifyMiddleware, update)
todoRouter.get('/show', verifyMiddleware, show)

export default todoRouter