import { addToCart, removeFromCart } from './cart.js'

function createCard(item) {

    const articleElement = document.createElement('article');
    articleElement.classList.add('producto');

    const aElement = document.createElement('a');
    aElement.href = `./product.html?id=${item.id}`;


    const productContainerElement = document.createElement('div');
    productContainerElement.classList.add('product-container');


    const imageContainerElement = document.createElement('div');
    imageContainerElement.classList.add('image-container');


    const imgElement = document.createElement('img');
    imgElement.src = item.image;
    imgElement.alt = `Foto de ${item.name}`;


    const cartIconElement = document.createElement('div');
    cartIconElement.classList.add('cart-icon');
    cartIconElement.addEventListener("click", (e) => {
        e.preventDefault()
        addToCart({ id: item.id, cantidad: 1 })
    });

    const cartImgElement = document.createElement('img');
    cartImgElement.src = './assets/images/cart-icon.png';
    cartImgElement.alt = '';


    const productTitleElement = document.createElement('p');
    productTitleElement.classList.add('product-title');
    productTitleElement.textContent = item.name;


    const priceElement = document.createElement('div');
    priceElement.classList.add('price');


    const dollarSignElement = document.createElement('span');
    dollarSignElement.textContent = '$';

    const priceValueElement = document.createElement('span');
    priceValueElement.textContent = item.price.toFixed(2);


    cartIconElement.appendChild(cartImgElement);
    imageContainerElement.appendChild(imgElement);
    imageContainerElement.appendChild(cartIconElement);

    productContainerElement.appendChild(imageContainerElement);
    productContainerElement.appendChild(productTitleElement);
    priceElement.appendChild(dollarSignElement);
    priceElement.appendChild(priceValueElement);
    productContainerElement.appendChild(priceElement);

    aElement.appendChild(productContainerElement);
    articleElement.appendChild(aElement);
    return articleElement;
}

function cartItemList(item) {

    const cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart-item');

   
    const descriptionElementCart = document.createElement('p');
    descriptionElementCart.classList.add('description');
    descriptionElementCart.textContent = `${item.name} X${item.cantidad}`

    
    const priceElementCart = document.createElement('div');
    priceElementCart.classList.add('price');


    const dollarSignElementCart = document.createElement('span');
    dollarSignElementCart.style="margin-left: 3em;"
    dollarSignElementCart.textContent = '$';

    const priceValueElementCart = document.createElement('span');
    priceValueElementCart.textContent = (item.price*item.cantidad).toFixed(2);

    priceElementCart.appendChild(dollarSignElementCart);
    priceElementCart.appendChild(priceValueElementCart);

    
    cartItemElement.appendChild(descriptionElementCart);
    cartItemElement.appendChild(priceElementCart);

    
    return cartItemElement
}

function cartItemCard(item) {

    const articleElementCart = document.createElement('article');
    articleElementCart.classList.add('product-in-cart');


    const imageContainerElementCart = document.createElement('div');
    imageContainerElementCart.classList.add('image-container');


    const imgElementCart = document.createElement('img');
    imgElementCart.src = item.image;
    imgElementCart.alt = `Foto de ${item.name}`;

    const productInfoElementCart = document.createElement('div');
    productInfoElementCart.classList.add('product-info');


    const productTitleElementCart = document.createElement('p');
    productTitleElementCart.classList.add('product-title');
    productTitleElementCart.textContent = item.name;

    const quantityElementCart = document.createElement('div');
    quantityElementCart.classList.add('quantity');


    const increaseButtonCart = document.createElement('button');
    increaseButtonCart.classList.add('round');
    increaseButtonCart.textContent = '+';

    const quantityInputCart = document.createElement('input');
    quantityInputCart.type = 'text';
    quantityInputCart.value = '1';
    quantityInputCart.size = '1';
    quantityInputCart.value = item.cantidad;

    const decreaseButtonCart = document.createElement('button');
    decreaseButtonCart.classList.add('round');
    decreaseButtonCart.textContent = '-';

    increaseButtonCart.addEventListener("click",()=>{
        addToCart({id:item.id, cantidad:1});
        location.reload()
    })
    decreaseButtonCart.addEventListener("click",()=>{
        addToCart({id:item.id, cantidad:-1});
        location.reload()
    })
    quantityElementCart.appendChild(increaseButtonCart);
    quantityElementCart.appendChild(quantityInputCart);
    quantityElementCart.appendChild(decreaseButtonCart);


    const priceElementCart = document.createElement('div');
    priceElementCart.classList.add('price');



    const dollarSignElementCart = document.createElement('span');
    dollarSignElementCart.textContent = '$';

    const priceValueElementCart = document.createElement('span');
    priceValueElementCart.textContent = (item.price * item.cantidad).toFixed(2);


    priceElementCart.appendChild(dollarSignElementCart);
    priceElementCart.appendChild(priceValueElementCart);


    const eliminarElement = document.createElement('div');
    eliminarElement.classList.add('eliminar');


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('round');
    deleteButton.textContent = '╳';
    deleteButton.addEventListener("click",()=>{
        removeFromCart(item.id);
        location.reload()
    })

    eliminarElement.appendChild(deleteButton);
    imageContainerElementCart.appendChild(imgElementCart);
    productInfoElementCart.appendChild(productTitleElementCart);
    productInfoElementCart.appendChild(quantityElementCart);
    productInfoElementCart.appendChild(priceElementCart);
    articleElementCart.appendChild(imageContainerElementCart);
    articleElementCart.appendChild(productInfoElementCart);
    articleElementCart.appendChild(eliminarElement);

    return articleElementCart;
}

export { createCard, cartItemCard, cartItemList }

