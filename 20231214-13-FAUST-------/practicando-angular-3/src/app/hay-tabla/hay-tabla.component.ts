import { Component, Input } from '@angular/core';
import { Sinso } from 'src/assets/interface/sinso';

@Component({
  selector: 'app-hay-tabla',
  templateUrl: './hay-tabla.component.html',
  styleUrls: ['./hay-tabla.component.css']
})
export class HayTablaComponent {
  @Input() elementosTabla:Sinso[] =[];

  unaFuncion(text:string){
    return "este tipo es "+text
  }
}
