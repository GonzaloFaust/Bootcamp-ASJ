function getProveedores(){
    const prov:any = localStorage.getItem("proveedores")
    return JSON.parse(prov) || [];
}

function getProductos(){
    const prod: any = localStorage.getItem("productos")
    return JSON.parse(prod) || [];
}

function getOrdenesCompra(){
    const ord:any = localStorage.getItem("ordenes")
    return JSON.parse(ord) || [];
}

function insertProveedor(item:any){
    const proveedores = getProveedores()
    proveedores.push(item)
   localStorage.setItem("proveedores", JSON.stringify(proveedores))
}

function insertProducto(item: any){
   const productos = getProductos()
   productos.push(item)
   localStorage.setItem("productos", JSON.stringify(productos))
}

function insertOrdenCompra(item: any){
    const ordenes = getOrdenesCompra()
   ordenes.push(item)
   localStorage.setItem("ordenes", JSON.stringify(ordenes))
}

function deleteOrden(id:number){
    const ordenes = getOrdenesCompra().filter( (o:any) => o.numeroOrdenCompra!==id)
    localStorage.setItem("ordenes", JSON.stringify(ordenes))
}
function deleteProducto(id:number){
    const productos = getProductos().filter((prod: any )=>prod.codigoSKU!==id)
    localStorage.setItem("productos", JSON.stringify(productos))//no se borran porque no hay ordenes en el localStorage, vienen del archivo mock de ordenes
}
function deleteProveedor(id:number){
    const proveedores = getProveedores().filter((prov:any)=>prov.codigo!==id)
    localStorage.setItem("proveedores", JSON.stringify(proveedores))
}

export {
    getProductos,
    getProveedores,
    getOrdenesCompra, 
    insertOrdenCompra,
    insertProveedor,
    insertProducto,
    deleteOrden,
    deleteProducto,
    deleteProveedor
}