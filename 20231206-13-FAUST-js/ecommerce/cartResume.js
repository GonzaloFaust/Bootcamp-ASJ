import {getCart} from './assets/utils/cart.js'   
import { products } from './assets/utils/products.js'
import { cartItemCard, cartItemList } from './assets/utils/cards.js'

const cartContainer = document.getElementById("cart-products")
const cartListItems = document.getElementById('cart-list-items')
const precioFinal = document.getElementById('precio-final')


const cart= getCart().map(c=>{
    const filtered=products.filter(p=>p.id==c.id)[0];
    
    return {
        id:c.id, 
        cantidad:c.cantidad,
        image:filtered.image,
        name:filtered.name,
        price: filtered.price
    };
})


const cartList = cart.map(c=> cartItemCard(c))
for(const c of cartList){
    cartContainer.appendChild(c)
}

const cartItem = cart.map(c => cartItemList(c))
for(const c of cartItem ){
    cartListItems.appendChild(c)
}

precioFinal.textContent = cart.reduce((ac,e)=> ac += e.price * e.cantidad ,0).toFixed(2)