import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RegistroService } from '../services/registro.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private registroService: RegistroService) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }


  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.registroService.registrarCliente(this.name, this.email, this.phone, this.password)
      .subscribe(
        (response) => {
          alert('Cliente registrado exitosamente');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Error al registrar el cliente: ' + error.error.message);
        }
      );
  }
}