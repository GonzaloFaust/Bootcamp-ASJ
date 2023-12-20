import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http: HttpClient) { }
  
  usuarioDatos={
    id:-1,
    name:"",
    job:""
  }
  URL_API= 'https://reqres.in/api/users'

  //CREATE
  public createUser(user:any):Observable<any>{
    return this.http.post(this.URL_API, user)
  }

  //READ
  public getUsers():Observable<any>{
    return this.http.get(this.URL_API)
  }

  //UPDATE
  public updateUser(user:any){
    return this.http.put(this.URL_API+"/"+this.usuarioDatos.id, user)
  }

  //DELETE
  public deleteUser(id:number){
    return this.http.delete(this.URL_API+"/"+id)
  }
  
  public getUserById(id:number){
    return this.http.get(this.URL_API+"/"+id)
  }
}
