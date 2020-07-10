import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from '../models/Task'
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Statu } from '../models/Statu';
import { TaskToUser } from '../models/TaskToUser';
import { TastToUserDetail } from '../models/TastToUserDetail';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl =  `${environment.apiUrlBase}/api/tasktokuser`;

const apiUrltask =  `${environment.apiUrlBase}/api/task`;
const apiUrlUser =  `${environment.apiUrlBase}/api/user`;
const apiUrlStatu =  `${environment.apiUrlBase}/api/statu`;

@Injectable({
  providedIn: 'root'
})
export class TasktoUserService {

constructor(private http: HttpClient) { }

getAllTask():Observable<Task[]>{  
  return this.http.get<Task[]>(`${apiUrltask}`)
}

getAllUser():Observable<User[]>{  
  return this.http.get<User[]>(`${apiUrlUser}`)

}

getAllStatu():Observable<Statu[]>{  
  return this.http.get<Statu[]>(`${apiUrlStatu}`)

}

consultaDetail():Observable<TastToUserDetail []>{  
  return this.http.get<TastToUserDetail[]>(`${apiUrl}`)
}

getById(id :string ):Observable<Task>{
  return this.http.get<Task>(`${apiUrl}/${id}`)
}

add (tasktouse:TaskToUser){
  return this.http.post(`${apiUrl}`,tasktouse)
  }

 update (tasktouser:Task){  
    return this.http.put(`${apiUrl}/${tasktouser.id}`,tasktouser)  
  }

delete(id:string){
 return this.http.delete(`${apiUrl}/${id}`)
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
