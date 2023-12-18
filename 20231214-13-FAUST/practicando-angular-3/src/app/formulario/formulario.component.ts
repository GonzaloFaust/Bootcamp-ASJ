import { Component, Output,EventEmitter } from '@angular/core';
import { Sinso } from 'src/assets/interface/sinso';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  @Output() agregar:EventEmitter<Sinso>;
  constructor(){
    this.agregar = new EventEmitter()
  }
  subir(nombre:string, rol:string, foto:string){
    const newPersonaje:Sinso={
      nombre,
      rol,
      foto
    }
  }
}
