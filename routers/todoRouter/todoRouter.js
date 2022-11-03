import { Router } from "express";
import create from './create.js';
import remove from "./remove.js";
import show from "./show.js";
import update from "./update.js";
const todoRouter = Router();

todoRouter.post('/create', create)
todoRouter.delete('/remove', remove)
todoRouter.put('/update', update)
todoRouter.get('/show', show)

export default todoRouter