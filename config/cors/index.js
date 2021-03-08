import dotenv from 'dotenv'
dotenv.config({path:'.env'})
import cors from 'cors'

export const whitelist = process.env.PERMITIDOS.split(' ')
let undefined = process.env.ALL_CLIENTS?'undefined':''
export const corsOptions = {
  origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1||typeof origin === undefined) {
          callback(null, { origin: true })
        } else {
          callback(new Error('No permitido por CORS')) //
        }
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}