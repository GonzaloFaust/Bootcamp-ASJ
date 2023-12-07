import { products } from "./assets/utils/products.js"
import { addToCart } from "./assets/utils/cart.js"

const productQuery=window.location.search
const urlParams = new URLSearchParams(productQuery)
const productID= urlParams.get('id')

const product = products.filter(p=>p.id==productID)[0]
// console.log(product)
if (product===undefined){
    window.location.href='/ecommerce/notfound.html'
}
else{

    const image = document.getElementById("product-image")
    image.src=product.image

    const title = document.getElementById("product-title")
    title.textContent= product.name

    const description = document.getElementById("product-description")
    description.textContent= product.description

    const price = document.getElementById("product-price")
    price.textContent= product.price.toFixed(2)
}


const addToCartButton = document.getElementById("add-to-cart")
addToCartButton.addEventListener("click",()=>{
    addToCart(product)
})