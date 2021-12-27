import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      ruta: '/home',
      nombre: 'Home',
    },
    {
      ruta: '/tecnologias',
      nombre: 'Mis herramientas',
    },
    {
      ruta: '/personal',
      nombre: '¿Quién soy?',
    },
    {
      ruta: '/contacto',
      nombre: 'Contactame',
    },
    {
      ruta: '/entrañas',
      nombre: 'Este sitio',
    },
  ];
}
