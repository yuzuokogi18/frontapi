import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/clients';  

  constructor(private http: HttpClient) {}

  getClientByEmail(email: string): Observable<Client> {
    const url = `${this.apiUrl}/${email}`;  
    return this.http.get<Client>(url);  
  }
}
