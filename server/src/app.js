import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

//create app
const app = express()

//CONFIGURATIONS
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true, 
  };
app.use(cors(corsOptions))
app.use(express.json({limit: "20kb"})); //accept json requests with a limit
app.use(express.urlencoded({extended: true, limit: "16kb"})) //used when data is passed in the url.
app.use(express.static("public")) //when a file is received and you want to store it in public folder for temporary basis
app.use(cookieParser())

//ROUTES SECTION
//import routes


//routes declare


export default app