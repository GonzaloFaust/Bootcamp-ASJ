import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit{

  idChar = this.route.snapshot.paramMap.get("product-id")!;


  constructor(private service:ProductosService, private cartService: CartService,private route:ActivatedRoute){ }

  producto:any={};

  ngOnInit(): void {
      this.service.getSingleProduct(this.idChar).subscribe(data=>{
        this.producto=data;
        this.producto.images=this.producto.images[0]
      } )
  }
  
  addToCart(cantidad:HTMLInputElement){
    const cant= cantidad.value==""? 0: parseInt(cantidad.value)
    console.log(cant)
    this.cartService.addProducto({id:this.producto.id, cantidad:cant})
    location.reload()
  }

}
