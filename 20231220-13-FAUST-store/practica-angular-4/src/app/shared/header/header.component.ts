import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router, private cart: CartService) { }

  cartLength: number = 0;
  ruta = this.router
  ngOnInit(): void {

    this.cartLength = this.cart.cartLength()
  }
  checkRoute(route: string): boolean {
    return this.ruta.routerState.snapshot.url === route
  }

}
