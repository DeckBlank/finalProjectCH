import express from 'express'
const FOLDER_STATIC_FILES = process.env.FOLDER_STATIC_FILES
/* app.use((req,res,next)=>{
    req.dir_name = DIR_NAME
    next();
},statics) */

/* export const statics = express.Router()
statics.get('',(req, res)=> {
    let dirname = req.dir_name
    let path = "index.html";
    res.sendFile(path, {root: `${dirname}/${FOLDER_STATIC_FILES}/` })
}) */

export const statics = (dirname)=>{
    let path = "index.html";
    return {
        path,
        root:{
            root: `${dirname}/${FOLDER_STATIC_FILES}/`
        }
    }
}