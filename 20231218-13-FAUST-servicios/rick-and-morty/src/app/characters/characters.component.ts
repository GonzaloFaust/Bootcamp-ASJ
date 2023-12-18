import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  datos:any=[]

  constructor(public charactersService: ApiDataService){}
  
  ngOnInit(): void {
    this.charactersService.getData().subscribe((data) => {this.datos=data})
  }
}
