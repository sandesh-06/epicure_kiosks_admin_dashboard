import dotenv from "dotenv"
import connectToDB from "./db.js"
import app from "./app.js"

//always do the dotenv config at the start of index file
dotenv.config({
    path: './.env'
})

connectToDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server listening on PORT: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Server Setup failed!", err.message);
})