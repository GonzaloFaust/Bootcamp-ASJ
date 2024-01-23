
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private apiUrl = 'http://localhost:8080/tareas';

  constructor(private httpClient: HttpClient) {}

  // getTareas(): Observable<any> {
  //   return this.httpClient.get(this.apiUrl);
  // }

  getTareas() {
    return this.httpClient.get<Task[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    )

  }



  getTareaById(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Task>(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  createTarea(tarea: any): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, tarea)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateTarea(id: number, tarea: Task): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put(url, tarea, { responseType: 'text' })
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteTarea(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url,{ responseType: 'text' })
    .pipe(
      catchError(this.handleError)
    )
  }
  
  private handleError(error: HttpErrorResponse) {
    return throwError(()=> new Error(error.message));
  }

}
