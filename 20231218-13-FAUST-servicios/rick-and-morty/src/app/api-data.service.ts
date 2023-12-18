import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1')
    
  }
  public getCharacter(id:string){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
