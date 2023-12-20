import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any[] = []


  constructor(private service: ProductosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      const categoryName = res.get("category-name");
      if (categoryName !== null) {
        this.service.getProductByCategory(categoryName).subscribe((data: any) => this.products = data.products)
      }
      else {
        this.service.getProducts().subscribe(res => this.products = res.products)
      }
    })

  }

}
