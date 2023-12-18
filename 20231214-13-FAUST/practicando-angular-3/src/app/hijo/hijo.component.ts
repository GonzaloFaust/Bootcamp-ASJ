import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() dato:string='dsfsd'

  @Output() 
  eventito: EventEmitter<string>
  constructor(){
    this.eventito = new EventEmitter()
  }

  
  subir(){
    this.eventito.emit(this.dato +' pero ahora reenviado al padre')
  }
}
