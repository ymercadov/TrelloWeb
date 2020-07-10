import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../models/User'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl =  `${environment.apiUrlBase}/api/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

getAll():Observable<User[]>{  
  return this.http.get<User[]>(`${apiUrl}`)

}

getById(id :string ):Observable<User>{
  return this.http.get<User>(`${apiUrl}/${id}`)
}

add (user:User){
  return this.http.post(`${apiUrl}`,user)
  }

update (user:User){  
    return this.http.put(`${apiUrl}/${user.id}`,user)  
  }
  /*
  update (id:string, user:User){
  
    return this.http.put(`${apiUrl}/${id}`,user)
  
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
