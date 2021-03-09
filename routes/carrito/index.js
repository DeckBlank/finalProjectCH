import express from "express";
import {Carrito} from '../../core'
import {Productos}  from '../../core'
import {roles} from '../../middleware'
/* import { Productos } from "../../core/productos"; */
export const carrito = express.Router()


carrito.get('/carrito/:id',(req,res)=>{
    let id = req.params.id
    res.json(Carrito.getItemsById(id))
})

carrito.put('/carrito/:id',
    (req,res,next)=>{
        req.roleRequired = ['admin','user']
        req.roleSession = 'user',
        req.idCarrito = 0
        next()
    },
    roles,
    (req,res,next)=>{
        let id = req.params.id
        let idCarrito = req.idCarrito
        let producto = Productos.getItemsById(id)
        res.json(Carrito.putItemById(idCarrito, producto));
    }
)

carrito.delete('/carrito/:id',
    (req,res,next)=>{
        req.roleRequired = ['admin','user']
        req.roleSession = 'user'
        req.idCarrito = 0
        next()
    },
    roles,
    (req,res,next)=>{
        let idProducto = req.params.id
        let idCarrito = req.idCarrito
        res.json(Carrito.deleteItemById(idCarrito,idProducto));
})
