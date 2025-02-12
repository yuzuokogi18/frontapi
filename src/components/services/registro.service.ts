import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8080/clients';  

  constructor(private http: HttpClient) {}

  registrarCliente(name: string, email: string, phone: string, password: string): Observable<any> {
    const cliente = { name, email, phone, password, confirmPassword: password }; 
    return this.http.post(this.apiUrl, cliente);
  }
}
