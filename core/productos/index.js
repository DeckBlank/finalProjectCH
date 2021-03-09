class productos{
    constructor(){
        this.productos = []
    }
    getItems(){
        if(!this.productos.length){
            return this.noItems()
        }
        return this.productos
    }
    getItemsById(id){
        let data  = this.validacionEsquema('get',{id})
        if(!data) return this.error()
        if(!this.productos.length) return this.noItems()
        let filtered = this.productos.filter((producto) => { return producto.id === data.id; });
        if(filtered.length===0) return this.itemNotFound()
        return filtered[0]
    }
  
    addItem(obj){
        let data  = this.validacionEsquema('post',obj)
        console.log(data);
        if(!data) return this.error()
        if(!data) return this.error()
        let id = this.productos.length;
        if(id!=0){
            let maxId = this.productos.reduce(function(prev, current) {
                return (prev.id > current.id) ? prev : current
            })
            id = parseInt(maxId.id) + 1
        }
        let newProducto = {...data,id}
        this.productos = [...this.productos, {...newProducto}]
        return newProducto
    }
    putItemById(obj){
        let data  = this.validacionEsquema('put',obj)
        if(!data) return this.error()
        let indexEncontrado = this.productos.findIndex((producto) => { return producto.id === data.id; });
        if(indexEncontrado===-1) return this.itemNotFound()
        this.productos[indexEncontrado] = {...data}
        return data
    }
    deleteItemById(id){
        let data  = this.validacionEsquema('delete',{id})
        if(!data) return this.error()
        let indexEncontrado = this.productos.findIndex((producto) => { return producto.id === data.id; });
        if(indexEncontrado===-1) return this.itemNotFound()
        this.productos.splice(indexEncontrado,1)
        return this.productos
    }
  
    itemNotFound(){
        return {
            error : 'producto no encontrado'
        }
    }
  
    noItems(){
        return {
            error:'no hay productos cargados'
        }
    }
  
    isObject(obj){
        return obj != null && obj.constructor.name === "Object"
    }
    error(){
        return {message:"algo salio mal"}
    }
  
    validacionEsquema(metodo,data){
        let datoValidado = {}
        let esquema = {
            //id : "number",
            nombre : {type:"string"},
            descripcion : {type:"string"},
            codigo : {type:"string"},
            foto : {type:"string"},
            precio : {type:"number"},
            stock : {type:"number"},
            timestamp : {type:"date",default:new Date()},
        }
        try {
            switch (metodo.toLowerCase()) {
                case 'post':
                    for (const key in esquema) {
                        if(esquema[key]['default']){
                            datoValidado[key] = esquema[key]['default']
                        }else{
                            if(esquema[key]['type']==='string') datoValidado[key] = data[key].toString()
                            if(esquema[key]['type']==='number') datoValidado[key] = parseInt(data[key])
                        }
                    }
                    break;
                case 'put':
                    for (const key in esquema) {
                        if(esquema[key]['default']){
                            datoValidado[key] = data[key]['default']
                        }else{
                            if(esquema[key]['type']==='string') datoValidado[key] = data[key].toString()
                            if(esquema[key]['type']==='number') datoValidado[key] = parseInt(data[key])
                        }
                    }
                    datoValidado['id'] = parseInt(data['id'])
                    break;
                default:
                    datoValidado = {id:parseInt(data['id'])}
                    break;
            }
            return datoValidado;    
        } catch (error) {
            console.log(error);
            return false;
        }
    }
  }
  
  export const Productos = new productos();
  