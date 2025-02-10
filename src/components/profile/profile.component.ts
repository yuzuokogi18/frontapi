import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  client: Client | null = null;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtén el correo electrónico de la URL
    const clientEmail = this.route.snapshot.paramMap.get('email'); // Si el correo es parte de la URL
    
    console.log('Correo electrónico obtenido:', clientEmail);  // Log para verificar el correo recibido

    if (clientEmail) {
      this.clientService.getClientByEmail(clientEmail).subscribe(
        (data: Client) => {
          console.log('Datos del cliente recibidos:', data);  // Log para verificar los datos recibidos
          this.client = data;  // Asignamos los datos recibidos al modelo
        },
        (error) => {
          console.error('Error al obtener los datos del cliente', error);
        }
      );
    }
  }
}