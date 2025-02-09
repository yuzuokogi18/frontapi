import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistroComponent } from "../registro/registro.component";

@Component({
  selector: 'app-home',
  imports: [LoginComponent, RegistroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
