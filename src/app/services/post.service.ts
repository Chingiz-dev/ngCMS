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
    const url = `${this.dbUrl}?_sort=id&_order=desc`;
    return this.http.get<Post[]>(url);
  }

  getPostsByViews(): Observable<Post[]> {
    const url = `${this.dbUrl}?_sort=views&_order=desc`;
    return this.http.get<Post[]>(url);
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    const url = `${this.dbUrl}?category=${category}&_sort=id&_order=desc`;
    return this.http.get<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.dbUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.dbUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${this.dbUrl}/${post.id}`;
    return this.http.delete<Post>(url);
  }

}
