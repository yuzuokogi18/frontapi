import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { AgregarComponent } from '../components/agregar/agregar.component';
import { EditarLibroComponent } from '../components/editar/editar.component';
import { EliminarComponent } from '../components/eliminar/eliminar.component';
import { VerlibrosComponent } from '../components/verlibros/verlibros.component';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { ProfileComponent } from '../components/profile/profile.component';

export const routes: Routes =  [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
     {path: 'registro', component: RegistroComponent},
      {path: 'principal', component: PrincipalComponent},
     {path: 'agregar',component: AgregarComponent},
     {path: 'editar',component:EditarLibroComponent},
      {path: 'eliminar',component:EliminarComponent},
      {path: 'verlibros',component:VerlibrosComponent},
    {path:'usuarios',component:UsuariosComponent},
     {path:'profile/:email',component:ProfileComponent}];
