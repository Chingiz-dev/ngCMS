import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Category } from '../model/category';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private dbUrl = `${baseUrl}/categories`;

  constructor(private http: HttpClient,) { }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.dbUrl, category, httpOptions);
  }

  getCategory(title: string): Observable<Category> {
    const url = `${this.dbUrl}?title=${title}`;
    return this.http.get<Category>(url);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dbUrl);
  }

  deleteCategory(category: Category): Observable<Category> {
    const url = `${this.dbUrl}/${category.id}`;
    return this.http.delete<Category>(url);
  }

  updateCategory(category: Category): Observable<Category> {
    const url: string = `${this.dbUrl}/${category.id}`;
    return this.http.put<Category>(url, category, httpOptions);
  }
}
