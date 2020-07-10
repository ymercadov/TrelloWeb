import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from '../models/Task'
import { environment } from 'src/environments/environment';
import { Statu } from '../models/Statu';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl =  `${environment.apiUrlBase}/api/statu`;

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

constructor(private http: HttpClient) { }

getAll():Observable<Statu[]>{  
  debugger;
  return this.http.get<Statu[]>(`${apiUrl}`)
}


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
