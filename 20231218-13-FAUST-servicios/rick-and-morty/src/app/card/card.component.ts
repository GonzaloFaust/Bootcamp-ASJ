import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

character:any = {}
idChar = this.route.snapshot.paramMap.get("id-character") || "-1";

constructor( private charService: ApiDataService, public route: ActivatedRoute){}


ngOnInit(): void {
  this.charService.getCharacter(this.idChar).subscribe(data=> {console.log(data);this.character={...data}})
}


}
