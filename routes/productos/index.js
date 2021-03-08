import express from "express";

export const productos = express.Router()

productos.get('/productos/',(req,res)=>{
    res.json('todos los productos')
})