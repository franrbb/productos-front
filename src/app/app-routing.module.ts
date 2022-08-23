import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: '', redirectTo: '/productos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
