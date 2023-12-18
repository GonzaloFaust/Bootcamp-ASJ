import { Component } from '@angular/core';
import { Sinso } from 'src/assets/interface/sinso';

@Component({
  selector: 'app-los-sinso',
  templateUrl: './los-sinso.component.html',
  styleUrls: ['./los-sinso.component.css']
})
export class LosSinsoComponent {
  personajes:Array<Sinso>=[
    {
      nombre:"homero",
      rol:"operador",
      foto:"https://totalnewsagency.com/wp-content/uploads/2022/05/hoy-cumple-anos-homero-simpson-enterate-cuantos.jpg"
    }
  ]

  addPersonaje(pers:Sinso){
    this.personajes.push(pers)
  }
}
