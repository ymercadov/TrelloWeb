import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from '../models/Task'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl =  `${environment.apiUrlBase}/api/task`;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor(private http: HttpClient) { }

getAll():Observable<Task[]>{  
  return this.http.get<Task[]>(`${apiUrl}`)

}

getById(id :string ):Observable<Task>{
  return this.http.get<Task>(`${apiUrl}/${id}`)
}

add (task:Task){
  return this.http.post(`${apiUrl}`,task)
  }

  update (task:Task){  
    return this.http.put(`${apiUrl}/${task.id}`,task)  
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
