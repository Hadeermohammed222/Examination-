import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private loggedIn: boolean = false;
  baseUrl:string = "https://exam-back-beta.vercel.app/users";
  private isAuthenticatedStatus: boolean = false;
  constructor(private http: HttpClient) { }
  setAuthenticated(status: boolean): void {
    this.isAuthenticatedStatus = status;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedStatus;
  }
    getUsers(): Observable<any>{
      return this.http.get<any>(this.baseUrl);
    }

    addUsers(users:any): Observable<any>{
      return this.http.post<any>(this.baseUrl,users);
    }
    isLoggedIn(): boolean {
      return this.loggedIn;
    }
  
    login() {
      this.loggedIn = true;
    }
  
    logout() {
      this.loggedIn = false;
    }
}
