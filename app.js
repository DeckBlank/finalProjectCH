import dotenv from 'dotenv'
dotenv.config({path:'.env'})
import express from 'express'
import http from 'http'
import {corsOptions,statics} from './config'
import cors from 'cors'
import morgan from 'morgan'
import * as rutas from './routes'

export const app = express();
export const DIR_NAME = __dirname
app.use(morgan('tiny'))
app.use(cors(corsOptions))
app.use(express.json());


app.use(( err,req, res, next) => {
    res.status(400).send(err.message);
 });

 
for (const ruta in rutas) {
    app.use('/api/',rutas[ruta])
}
    
app.get("/*/",(req,res)=>{
    let estaticos =  statics(DIR_NAME)
    res.sendFile(estaticos.path, estaticos.root)
})