import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())


import user from "./routes/user.js"

app.use("/users",user)

//it will work like this => http://localhost:3000/users/register => then func call registeruser
export {app}