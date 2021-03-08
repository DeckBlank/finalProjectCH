import dotenv from 'dotenv'
import {app} from './app'

dotenv.config()
const PORT = process.env.PORT
export const serve = app.listen(PORT,(error)=>{
    if(error)console.error(error);
    console.log(`Aplicacion en ${PORT}`);
})
