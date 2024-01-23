import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { InfoVideo } from '../models/InfoVideo';



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/infovideo';

  constructor(private http: HttpClient) {}

  // getTareas(): Observable<any> {
  //   return this.httpClient.get(this.apiUrl);
  // }

  getVideos(): Observable<InfoVideo[]>{
    return this.http.get<InfoVideo[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    )

  }

  getVideoById(id: number): Observable<InfoVideo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<InfoVideo>(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  postVideo(video: InfoVideo): Observable<InfoVideo> {
    const headers ={ 'Content-Type':  'application/json',}
    return this.http.post<InfoVideo>(this.apiUrl, video, {headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  updateVideo(video: InfoVideo): Observable<any> {
    const url = `${this.apiUrl}/${video.id}`;
    return this.http.put(url, video)
    .pipe(
      catchError(this.handleError)
    )
  }
  
  public deleteVideo(video: InfoVideo):Observable<InfoVideo[]>{
  
    const urlDelete = this.apiUrl+'/'+video.id;
    return this.http.delete<InfoVideo[]>(urlDelete);
  }


  // deleteVideo(video:InfoVideo): Observable<any> {
  //   const url = `${this.apiUrl}/${video.id}`;
  //   return this.httpClient.delete(url)
  // }
  
  private handleError(error: HttpErrorResponse) {
    return throwError(()=> new Error(error.message));
  }
}
