import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routers/todoRouter/todoRouter.js";
import connectDB from "./utils/db/connect.js";
import * as dotenv from 'dotenv';
import authRouter from "./routers/authRouter/authRouter.js";
import passport from './utils/passport.js'
import pkg from 'body-parser'
import session from 'express-session'
import flash from 'connect-flash'
import MongoStore from "connect-mongo";

const {urlencoded} = pkg;

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(urlencoded({extended: false}))
app.use(bodyParser.json())

connectDB()

app.use(session({
    name: 'todoAuth',
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.mongoDB_URI,
        dbName: 'test',
        ttl: 24*60*60,
    }),
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())



app.get('/', (req, res) => {
    res.send("Server is running")
})

//Routers
app.use('/todo', todoRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})