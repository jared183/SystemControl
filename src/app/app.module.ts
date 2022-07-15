import { ReciboComponent } from './pages/formulario/recibo/recibo.component';
import { TableReciboComponent } from './pages/tables/tableRecibo/tableRecibo.component';
import { TableVentaComponent } from './pages/tables/tableVenta/tableVenta.component';
import { FormRentaComponent } from './pages/formulario/formRenta/formRenta.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './pages/menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { FormVentaComponent } from './pages/formulario/formVenta/formVenta.component';
import { RentaComponent } from './pages/documents/renta/renta.component';
import { VentaComponent } from './pages/documents/venta/venta.component';
import { TableRentaComponent } from './pages/tables/tableRenta/tableRenta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ReciboComponent,
    FormRentaComponent,
    FormVentaComponent,
    RentaComponent,
    VentaComponent,
    TableRentaComponent,
    TableVentaComponent,
    TableReciboComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:[
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class AppModule { }
