import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu-container')) {
      this.menuVisible = false;
    }
  }

}
