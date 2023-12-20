import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  API_URL = 'https://dummyjson.com/products';

  public getProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.API_URL + '/categories');
  }

  public getSingleProduct(id:string): Observable<any> {
    return this.http.get(this.API_URL +"/"+ id);
  }

  // public getSingleCategory(id: string): Observable<any> {
  //   return this.http.get(this.API_URL + '/categories/'+id);
  // }
  getProductByCategory(name:string){
    return this.http.get(this.API_URL +"/category/"+ name);
  }
}

