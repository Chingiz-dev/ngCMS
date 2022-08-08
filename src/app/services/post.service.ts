import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/model/post';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private dbUrl = 'http://localhost:5011/posts';

  constructor(private http: HttpClient,private router: Router) {}

  getPostsList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.dbUrl);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.dbUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      catchError(()=>{
        this.router.navigate(['/guest/posts']);
        return EMPTY;
      })
    );
  }
}
