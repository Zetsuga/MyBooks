import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"registro" , component: RegistroComponent},
  {path:"perfil" , component: PerfilComponent},
  {path:"libros" , component: LibrosComponent},
  {path:"login" , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
