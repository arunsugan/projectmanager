import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = "http://localhost:4001/tasks";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error:', error.error.message);
    } else {
      console.error(
        `Error code returned: ${error.status}, ` +
        `Msg: ${error.error}`);
    }
    return throwError('Connection failed! please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
 
  getTasks(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getTask(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  postTask(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateTask(data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteTask(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  startTask(data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  completeTask(data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
