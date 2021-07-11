import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MisHerramientasComponent } from './pages/mis-herramientas/mis-herramientas.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InfoSitioComponent } from './pages/info-sitio/info-sitio.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: HomeComponent },
      { path: 'tecnologias', component: MisHerramientasComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'entrañas', component: InfoSitioComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortafolioRoutingModule {}
