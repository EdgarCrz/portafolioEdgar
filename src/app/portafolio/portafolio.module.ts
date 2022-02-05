import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InfoSitioComponent } from './pages/info-sitio/info-sitio.component';
import { MisHerramientasComponent } from './pages/mis-herramientas/mis-herramientas.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NgParticlesModule } from 'ng-particles';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    InfoSitioComponent,
    MisHerramientasComponent,
    PersonalComponent,
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    NgParticlesModule,
    TimelineModule,
    CardModule,
    MaterialModule
   
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PortafolioModule {}
