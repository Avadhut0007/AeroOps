import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {
  
  
  private apiUrl='http://localhost:8080/user'
  constructor(private httpClient:HttpClient) { }

  registerUser(user:any) :Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/register`,user);
  }

  loginUser(emailId:string , userPassword:string):Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/findUser/${emailId}/${userPassword}`,{observe:'response'})
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }


}
