import { Component } from '@angular/core';
import { EliminarService } from '../services/eliminar.service';
import { Books } from '../models/books';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  books: Books[] = [];
  selectedBookId: number | null = null;

  constructor(private eliminarService: EliminarService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.eliminarService.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  deleteBook(): void {
    if (this.selectedBookId !== null) {
      this.eliminarService.deleteBook(this.selectedBookId).subscribe(
        () => {
          this.books = this.books.filter(book => book.ID !== this.selectedBookId);
          this.selectedBookId = null;
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }
}
