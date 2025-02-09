import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Books } from '../models/books';
import { EditarService } from '../services/editar.service';
import { OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-editar',
  imports: [FormsModule, NgFor, NgIf, HeaderComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarLibroComponent implements OnInit {
  books: Books[] = [];
  selectedBook: Books | null = null;

  constructor(private editarService: EditarService) {}

  ngOnInit(): void {
    this.editarService.getBooks().subscribe(
      data => {
        this.books = data;
        console.log("Libros cargados:", this.books); 
      },
      error => {
        console.error("Error al obtener los libros:", error);
      }
    );
  }

  onSelectBook(event: Event): void {
    const selectedId = Number((event.target as HTMLSelectElement).value);
    this.selectedBook = this.books.find(book => book.ID === selectedId) ?? null;
    console.log("Libro seleccionado:", this.selectedBook); 
  }

  onUpdateBook(): void {
    if (this.selectedBook) {
      this.editarService.updateBooks(this.selectedBook).subscribe(() => {
        alert('Libro actualizado correctamente.');
      });
    }
  }
}