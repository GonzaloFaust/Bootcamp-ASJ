function addToCart(product){
    const cart= getCart();
    const index = cart.length > 0
        ? cart.indexOf(
            cart.filter(p => p.id==product.id)[0]
            ) 
        : -1
    if(index>=0){
        cart[index].cantidad += product.cantidad
    }
    else{
        cart.push(product)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

function removeFromCart(id){
    const cart= getCart();
    localStorage.setItem('cart',JSON.stringify(cart.filter(p=>p.id!==id)))
}

function getCart(){
    const cart=localStorage.getItem('cart') || []
    return JSON.parse(cart)
}

export {addToCart, removeFromCart, getCart}