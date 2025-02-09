import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8080/clients';  // URL de tu API

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo cliente
  registrarCliente(name: string, email: string, phone: string, password: string): Observable<any> {
    const cliente = { name, email, phone, password, confirmPassword: password }; // Datos que se envían
    return this.http.post(this.apiUrl, cliente);
  }
}
