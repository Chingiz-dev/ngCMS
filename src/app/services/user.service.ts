import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/model/user';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbUrl = `${baseUrl}/users`;

  constructor(private http: HttpClient, private router: Router) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.dbUrl, user, httpOptions);
  }

  getUser(email: string): Observable<User[]> {
    const url = `${this.dbUrl}?email=${email}`;
    return this.http.get<User[]>(url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.dbUrl);
  }

  deleteUser(user: User): Observable<User> {
    const url = `${this.dbUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  updateUser(user: User): Observable<User> {
    const url: string = `${this.dbUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }
}
