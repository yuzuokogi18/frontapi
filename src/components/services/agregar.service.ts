import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {
  private apiUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {}

  addBook(book: { title: string; author: string; price: number }): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }
}
