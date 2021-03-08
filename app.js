import dotenv from 'dotenv'
dotenv.config({path:'.env'})
import express from 'express'
import http from 'http'

const app = express();


const PORT = process.env.PORT


app.listen(PORT,(error)=>{
    if(error)console.error(error);
    console.log(`Aplicacion en ${PORT}`);
})
