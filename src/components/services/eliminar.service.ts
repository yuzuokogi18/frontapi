import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class EliminarService {
  private apiUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
