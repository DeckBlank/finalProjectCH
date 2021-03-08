import express from "express";

export const carrito = express.Router()

carrito.get('/carrito/',(req,res)=>{
    res.json('todos los carrito')
})