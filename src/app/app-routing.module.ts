import { RentaComponent } from './pages/documents/renta/renta.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { FormVentaComponent } from './pages/formulario/formVenta/formVenta.component';
import { FormRentaComponent } from './pages/formulario/formRenta/formRenta.component';
import { VentaComponent } from './pages/documents/venta/venta.component';
import { TableRentaComponent } from './pages/tables/tableRenta/tableRenta.component';
import { TableVentaComponent } from './pages/tables/tableVenta/tableVenta.component';
import { ReciboComponent } from './pages/formulario/recibo/recibo.component';
import { DocReciboComponent } from './pages/documents/docRecibo/docRecibo.component';
import { TableReciboComponent } from './pages/tables/tableRecibo/tableRecibo.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'plan-venta', component:FormVentaComponent},
  {path: 'doc-venta', component:VentaComponent},
  {path: 'tabla-venta', component:TableVentaComponent},
  {path: 'plan-renta', component:FormRentaComponent},
  {path: 'doc-renta', component:RentaComponent},
  {path: 'tabla-renta', component:TableRentaComponent},
  {path: 'recibo', component:ReciboComponent},
  {path: 'doc-recibo', component:DocReciboComponent},
  {path: 'tabla-recibo', component:TableReciboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
