import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(usename:string, password:string ): Observable<any> {
    if (usename === 'user' && password === 'user123') {
      this.setToken('JKHKDSJDH876868jjgjgjg76757jgJG');
      return of({ name: 'Mehmet Yılmaz', usename: 'user' });
    }
    return throwError(new Error('username or password incorrect!'));
  }
}