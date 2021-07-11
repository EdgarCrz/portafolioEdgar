import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InfoSitioComponent } from './pages/info-sitio/info-sitio.component';
import { MisHerramientasComponent } from './pages/mis-herramientas/mis-herramientas.component';
import { PersonalComponent } from './pages/personal/personal.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    InfoSitioComponent,
    MisHerramientasComponent,
    PersonalComponent,
  ],
  imports: [CommonModule, PortafolioRoutingModule],
})
export class PortafolioModule {}
