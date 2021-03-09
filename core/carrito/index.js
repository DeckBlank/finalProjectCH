class carrito{
    constructor(){
        this.carrito = []
    }
    getItemsById(id){
        let filtered = this.carrito.filter((carrito) => { return carrito.id === data.id });
        if(filtered.length===0) return this.itemNotFound()
        return filtered[0]
    }
    putItemById(id,obj){
        let indexEncontrado = this.carrito.findIndex((carrito) => { return carrito.id === id });
        if(indexEncontrado===-1){
            let newCarrito = this.addItem(id)
            indexEncontrado = newCarrito.id
        } 
        console.log(id,obj,this.carrito[indexEncontrado]);
        this.carrito[indexEncontrado].producto.push(obj)
        this.carrito[indexEncontrado].timestamp = new Date()
        return this.carrito[indexEncontrado]
    }
    addItem(id){
        let newCarrito = {id,producto:[],timestamp:new Date()}
        this.carrito = [...this.carrito, {...newCarrito}]
        return newCarrito
    }
    deleteItemById(id,idProducto){
        let indexEncontrado = this.carrito.findIndex((carrito) => { return carrito.id === id; });
        let indexProducto = this.carrito[indexEncontrado].producto.findIndex((carrito) => { return carrito.producto === idProducto; });
        this.carrito[indexEncontrado].producto.splice(indexProducto,1)
        return this.carrito[indexEncontrado]
    }
  
    itemNotFound(){
        return {
            error : 'carrito no encontrado'
        }
    }
  
    noItems(){
        return {
            error:'no hay carritos cargados'
        }
    }
    
  }
  
  export const Carrito = new carrito();
  