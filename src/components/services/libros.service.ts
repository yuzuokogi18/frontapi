import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:8080/books'; 

  constructor(private http: HttpClient) {}

  obtenerLibros(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl);
  }
}
