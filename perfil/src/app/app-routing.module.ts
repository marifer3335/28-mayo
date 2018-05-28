import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoComponent } from './foto/foto.component';     // Add this
import { ContactoComponent } from './contacto/contacto.component';  // Add this
import { DatosComponent } from './datos/datos.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: FotoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'datos',
    component:DatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
