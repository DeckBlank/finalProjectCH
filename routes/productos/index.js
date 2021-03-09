import express from "express";
import {Productos} from '../../core'
import {roles} from '../../middleware'
export const productos = express.Router()

productos.get('/productos/',(req,res)=>{
    res.json(Productos.getItems())
})

productos.get('/productos/:id',(req,res)=>{
    let id = req.params.id
    res.json(Productos.getItemsById(id))
})

productos.post('/productos/',
    (req,res,next)=>{
        req.roleRequired = ['admin']
        req.roleSession = 'admin'
        next()
    },
    roles,
    (req,res,next)=>{
    let body = req.body
    res.json(Productos.addItem(body))
})

productos.put('/productos/:id',
    (req,res,next)=>{
        req.roleRequired = ['admin']
        req.roleSession = 'admin'
        next()
    },
    roles,
    (req,res,next)=>{
    let body = req.body
    res.json(Productos.putItemById(body));
    req.message = Productos.getItems();
    next()
})

productos.delete('/productos/:id',
    (req,res,next)=>{
        req.roleRequired = ['admin']
        req.roleSession = 'admin'
        next()
    },
    roles,
    (req,res,next)=>{
    let id = req.params.id
    res.json(Productos.deleteItemById(id));
    req.message = Productos.getItems();
    next()
})


