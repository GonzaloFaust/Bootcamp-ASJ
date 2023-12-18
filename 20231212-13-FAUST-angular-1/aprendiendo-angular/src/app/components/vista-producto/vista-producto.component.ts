import { Component } from '@angular/core';
import { productCard } from '../../../assets/utils/utils'

import { getProductos } from "../../../assets/utils/handle-storage";
import producto from '../../../assets/data/productos'

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent {

 productos = getProductos()

 productosContainer = document.getElementById("productos-container")


}
