import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    // tek kullanıcı için decode etmeye gerek yok, decodda sadece user, iat filan gelecek
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(username:string, password:string ): Observable<any> {
    if(username==="user" && password==="user12345"){
       const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJzdWIiOjIsImlhdCI6MTYzNTYzOTc0OSwiZXhwIjoxNjM3MzQ5NzQ5fQ.0kneNoDovsi5QA9PrfgwXn0lFixgeArHeXPYYRtOipc";
     
       return of(sampleJWT).pipe(
       map((token) => {
      if(!token){
        return false;
      }
      localStorage.setItem("token", token);
      const decodedUser = this.jwtHelper.decodeToken(token);
      this.userInfo.next(decodedUser);
      return true;
       }));
      }
      return throwError(new Error('username or password incorrect!'));
  }
}