import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cart:CartService){}
  carrito:any=[]
  ngOnInit(): void {
    
    this.carrito=this.cart.getCarrito()
  }

}
