import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routers/todoRouter/todoRouter.js";
import connectDB from "./utils/db/connect.js";
import * as dotenv from 'dotenv';
import authRouter from "./routers/authRouter/authRouter.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

connectDB()

app.get('/', (req, res) => {
    res.send("Server is running")
})

//Routers
app.use('/todo', todoRouter);
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})