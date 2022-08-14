import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/model/post';
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
export class PostService {
  private dbUrl = `${baseUrl}/posts`;

  constructor(private http: HttpClient, private router: Router) {}

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.dbUrl, post, httpOptions);
  }

  getPostsList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.dbUrl);
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    const url = `${this.dbUrl}?category=${category}`;
    return this.http.get<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.dbUrl}/${id}`;
    return this.http.get<Post>(url);
  }
  // getPost(id: number): Observable<Post> {
  //   const url = `${this.dbUrl}/${id}`;
  //   return this.http.get<Post>(url).pipe(
  //     catchError(()=>{
  //       this.router.navigate(['/guest/posts']);
  //       return EMPTY;
  //     })
  //   );
  // }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.dbUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

}
