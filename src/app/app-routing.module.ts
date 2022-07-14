import { RentaComponent } from './pages/documents/renta/renta.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { FormVentaComponent } from './pages/formulario/formVenta/formVenta.component';
import { FormRentaComponent } from './pages/formulario/formRenta/formRenta.component';
import { VentaComponent } from './pages/documents/venta/venta.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'plan-venta', component:FormVentaComponent},
  {path: 'doc-venta', component:VentaComponent},
  {path: 'plan-renta', component:FormRentaComponent},
  {path: 'doc-renta', component:RentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
