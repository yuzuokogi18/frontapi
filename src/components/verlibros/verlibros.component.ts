import { Component } from '@angular/core';
import { Books } from '../models/books';
import { LibrosService } from '../services/libros.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-verlibros',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './verlibros.component.html',
  styleUrl: './verlibros.component.css'
})
export class VerlibrosComponent implements OnInit {
  libros: Books[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.librosService.obtenerLibros().subscribe(
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.error('Error al obtener libros', error);
      }
    );
  }

  comprarLibro(libro: Books): void {
    console.log(`Compraste el libro: ${libro.Title}`);
  }
}