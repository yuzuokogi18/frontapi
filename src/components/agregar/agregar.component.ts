import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AgregarService } from '../services/agregar.service';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/Book';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-agregar',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  book: Book = {
    
    title: '',
    author: '',
    price: 0
  };

  constructor(private agregarService: AgregarService, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault(); 
    this.agregarService.addBook(this.book).subscribe({
      next: (response) => {
        console.log('Libro agregado:', response);
        alert('Libro agregado exitosamente');
        this.book = { title: '', author: '', price: 0 }; 
      },
      error: (error) => {
        console.error('Error al agregar el libro:', error);
        alert('Error al agregar el libro');
      }
    });
  }

  goBack() {
    this.router.navigate(['/principal']);
  }
}
