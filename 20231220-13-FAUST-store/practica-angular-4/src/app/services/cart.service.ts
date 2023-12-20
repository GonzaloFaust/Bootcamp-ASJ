import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCarrito() {
    return JSON.parse(localStorage.getItem('cart')!) || []
  }

  addProducto(producto: any) {//{id:productodelaapi.id, cantidad:cantidaddeltemplate}
    const cart = this.getCarrito()
    const item = cart.find((i: any) => i.id == producto.id )
    if(item) {
      item.cantidad += producto.cantidad;
    }
    else{
      producto.cantidad>0 && cart.push(producto) 
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  cartLength():number{
    return this.getCarrito().reduce((acc:number,i:any)=>acc+=i.cantidad,0)
  }
}
