import {products} from './assets/utils/products.js'
import {createCard} from './assets/utils/cards.js'

if(localStorage.getItem('cart')===null){
    localStorage.setItem('cart',JSON.stringify([]))
}
const productSection = document.getElementsByClassName("productos")[0]

//insertando cards
const cards = products.map( p => createCard(p) ) 
for(const c of cards){
    productSection.appendChild(c)
}
